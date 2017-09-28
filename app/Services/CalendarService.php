<?php

namespace App\Services;

use App\Models\Calendar;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\CalendarProvider;
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

    public function authRedirect($provider) {
        return $this->getProvider($provider)->redirect();
    }

    public function getToken($provider, Request $request) {
        $tokenResponse = $this->getProvider($provider)->getToken($request);

        $tokenModel = CalendarProvider::firstOrNew([
            'provider' => $provider,
            'user_id' => \Auth::user()->id,
        ]);

        $tokenModel->fill([
            'token' => $tokenResponse->access_token,
            'refresh_token' => $tokenResponse->refresh_token,
            'expires' => Carbon::now()->addSecond($tokenResponse->expires_in)
        ]);

        $tokenModel->save();
    }

    public function getRooms($provider)
    {
        return $this->getProvider($provider)->getRooms();
    }

    public function getCalendar($provider, $room)
    {
        return $this->getProvider($provider)->getRoomsCalendar($room);
    }

    public function getCalendarEvents(Calendar $calendar)
    {
        return $this->getProvider($calendar->provider)->getCalendarEvents($calendar);
    }

    private function getProvider($provider) {

        $calendarProvider = $this->getCalendarProvider($provider);

        switch($provider) {
            case self::OFFICE365 :
                return new Office365($calendarProvider);
                break;
            default :
                throw new InvalidProvider('We do not support '.$provider);
                break;
        }
    }

    private function getCalendarProvider($provider)
    {
        return CalendarProvider::where('user_id', auth()->user()->id)
            ->where('provider', $provider)
            ->first();
    }

//    /**
//     * Saves an event
//     *
//     * @param Calendar $calendar
//     * @param $event
//     * @return mixed
//     */
//    public function saveEvent(Calendar $calendar, $event)
//    {
//        $eventModel = CalendarEvent::firstOrCreate([
//            'event_id' => $event->id,
//        ]);
//
//        $eventModel->fill([
//            'calendar_id' => $calendar->id,
//            'organizer' => $event->organizer->emailAddress->name,
//            'organizer_email' => $event->organizer->emailAddress->address,
//            'subject' => $event->subject,
//            'start_date' => Carbon::parse($event->start->dateTime, $event->start->timeZone)->tz('UTC'),
//            'end_date' => Carbon::parse($event->end->dateTime, $event->end->timeZone)->tz('UTC'),
//            'location' => $event->location->displayName,
//            'link' => $event->webLink,
//        ]);
//
//        $eventModel->save();
//
//        foreach($event->attendees as $attendee) {
//
//            $eventAttendeeModel = EventAttendee::firstOrCreate([
//                'calendar_event_id' => $eventModel->id,
//                'name' => $attendee->emailAddress->name,
//                'email'=> $attendee->emailAddress->address,
//            ]);
//
//            $eventAttendeeModel->status = $attendee->status->response;
//            $eventAttendeeModel->save();
//        }
//
//        $eventModel->touch();
//
//        return $eventModel;
//    }
}