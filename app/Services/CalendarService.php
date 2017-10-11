<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Room;
use App\Models\RoomEvent;
use Illuminate\Http\Request;
use App\Models\RoomProvider;
use App\Models\EventAttendee;
use App\Exceptions\InvalidProvider;
use App\Contracts\CalendarServiceContract;
use App\Services\CalendarProviders\GSuite;
use App\Services\CalendarProviders\Office365;

/**
 * Class CalendarService
 * @package App\Services
 */
class CalendarService implements CalendarServiceContract
{
    const OFFICE365 = 'office365';
    const GSUITE = 'gsuite';

    /**
     * @param $roomProvider
     * @return string
     */
    public function redirectUrl($roomProvider)
    {
        $roomProvider = RoomProvider::firstOrNew([
            'provider' => $roomProvider,
        ]);

        return $this->getProvider($roomProvider)->redirectUrl();
    }

    /**
     * @param $roomProvider
     * @param Request $request
     * @return mixed
     */
    public function getToken($roomProvider, Request $request)
    {
        $roomProvider = RoomProvider::firstOrNew([
            'provider' => $roomProvider,
            'user_id' => \Auth::user()->id,
        ]);

        $token = $this->getProvider($roomProvider)->getToken($request);

        $roomProvider->fill([
            'token' => $token['access_token'],
            'refresh_token' => $token['refresh_token'],
            'expires' => Carbon::now()->addSecond($token['expires_in'])
        ]);

        $roomProvider->email = $this->getUserEmail($roomProvider);

        $roomProvider->save();

        return $roomProvider;
    }

    /**
     * @param RoomProvider $roomProvider
     * @return mixed
     */
    public function getUserEmail(RoomProvider $roomProvider)
    {
        return $this->getProvider($roomProvider)->getUserEmail();
    }

    /**
     * @param RoomProvider $roomProvider
     * @return array
     */
    public function getRooms(RoomProvider $roomProvider)
    {
        return $this->getProvider($roomProvider)->getRooms();
    }

    /**
     * @param RoomProvider $roomProvider
     * @param $room
     * @return mixed
     */
    public function getRoomCalendar(RoomProvider $roomProvider, $room)
    {
        return $this->getProvider($roomProvider)->getRoomsCalendar($room);
    }

    /**
     * @param Room $room
     * @param Carbon $start
     * @param Carbon $end
     * @return GSuite|Office365
     */
    public function createBooking(Room $room, Carbon $start, Carbon $end)
    {
        $event = $this->getProvider($room->roomProvider)->createBooking($room, $start, $end);

        $roomEvent = RoomEvent::firstOrNew([
            'room_id' => $room->id,
            'event_id' => $event['id']
        ]);

        $roomEvent->fill([
            'end_date' => $end,
            'start_date' => $start,
            'link' => $event['link'],
            'subject' => $event['subject'],
            'location' => $event['location'],
            'organizer' => $event['organizer'],
            'organizer_email' => $event['organizer_email'],
        ]);

        $roomEvent->save();

        return $roomEvent->fresh();
    }

    /**
     * @param Room $room
     * @param RoomEvent $roomEvent
     * @param Carbon $start
     * @param Carbon $end
     * @return RoomEvent
     */
    public function updateBooking(Room $room, RoomEvent $roomEvent, Carbon $start, Carbon $end)
    {
        $this->getProvider($room->roomProvider)->updateBooking($room, $roomEvent, $start, $end);

        $roomEvent->update([
            'end_date' => $end,
            'start_date' => $start,
        ]);

        return $roomEvent->refresh();
    }

    /**
     * @param Room $room
     * @return array
     */
    public function getCalendarEvents(Room $room)
    {
        // We need to refresh the events
        $room->events()->delete();

        $events = [];
        $tempEvents = $this->getProvider($room->roomProvider)->getCalendarEvents($room);

        foreach($tempEvents as $event) {

            $roomEvent = RoomEvent::withTrashed()->firstOrNew([
                'room_id' => $room->id,
                'event_id' => $event['id']
            ]);

            $roomEvent->fill([
                'link' => $event['link'],
                'subject' => $event['subject'],
                'end_date' => $event['end_date'],
                'location' => $event['location'],
                'organizer' => $event['organizer'],
                'start_date' => $event['start_date'],
                'organizer_email' => $event['organizer_email'],
                'deleted_at' => null,
            ]);

            $roomEvent->save();

            foreach($event['attendees'] as $attendee) {
                $eventAttendee = EventAttendee::firstOrNew([
                    'email' => $attendee['email'],
                    'room_event_id' => $roomEvent->id,
                ]);

                $eventAttendee->fill([
                    'name' => $attendee['name'],
                    'status' => $attendee['status'],
                ]);

                if(empty($eventAttendee->name)) {
                    $eventAttendee->name = $eventAttendee->email;
                }

                $eventAttendee->save();
            }

            $events[] = $roomEvent->refresh();
        }

        return $events;
    }

    /**
     * @param RoomProvider $roomProvider
     * @return Office365 | GSuite
     * @throws InvalidProvider
     */
    protected function getProvider(RoomProvider $roomProvider)
    {
        switch ($roomProvider->provider) {
            case self::GSUITE :
                return new GSuite($roomProvider);
                break;
            case self::OFFICE365 :
                return new Office365($roomProvider);
                break;
            default :
                throw new InvalidProvider('We do not support ' . $roomProvider);
                break;
        }
    }
}