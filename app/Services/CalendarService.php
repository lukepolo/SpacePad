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
use App\Services\CalendarProviders\Office365;

/**
 * Class CalendarService
 * @package App\Services
 */
class CalendarService implements CalendarServiceContract
{
    const OFFICE365 = 'office365';

    /**
     * @param $roomProvider
     * @return \Illuminate\Http\RedirectResponse
     */
    public function authRedirect($roomProvider)
    {
        $roomProvider = RoomProvider::firstOrNew([
            'provider' => $roomProvider,
        ]);

        return $this->getProvider($roomProvider)->redirect();
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

        $tokenResponse = $this->getProvider($roomProvider)->getToken($request);

        $roomProvider->fill([
            'token' => $tokenResponse->access_token,
            'refresh_token' => $tokenResponse->refresh_token,
            'expires' => Carbon::now()->addSecond($tokenResponse->expires_in)
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
     * @return array
     */
    public function getCalendarEvents(Room $room)
    {
        $events = [];
        $tempEvents = $this->getProvider($room->roomProvider)->getCalendarEvents($room);

        foreach($tempEvents as $event) {

            $roomEvent = RoomEvent::firstOrNew([
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
            ]);

            $roomEvent->save();

            foreach($event['attendees'] as $attendee) {
                $eventAttendee = EventAttendee::firstOrCreate([
                    'name' => $attendee['name'],
                    'email' => $attendee['email'],
                    'status' => $attendee['status'],
                    'room_event_id' => $roomEvent->id,
                ]);
                $eventAttendee->save();
            }

            $events[] = $roomEvent->refresh();
        }

        return $events;
    }

    /**
     * @param RoomProvider $roomProvider
     * @return Office365
     * @throws InvalidProvider
     */
    protected function getProvider(RoomProvider $roomProvider)
    {
        switch ($roomProvider->provider) {
            case self::OFFICE365 :
                return new Office365($roomProvider);
                break;
            default :
                throw new InvalidProvider('We do not support ' . $roomProvider);
                break;
        }
    }
}