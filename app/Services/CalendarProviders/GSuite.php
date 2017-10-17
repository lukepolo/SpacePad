<?php

namespace App\Services\CalendarProviders;

use Carbon\Carbon;
use Google_Client;
use App\Models\Room;
use App\Models\RoomEvent;
use Google_Service_Oauth2;
use Google_Service_Calendar;
use Illuminate\Http\Request;
use App\Models\RoomProvider;
use Google_Service_Exception;
use Google_Service_Calendar_Event;
use App\Exceptions\InvalidUserRequest;
use App\Exceptions\InvalidRoomsRequest;
use App\Exceptions\InvalidTokenRequest;
use App\Exceptions\InvalidBookingRequest;
use App\Exceptions\InvalidCalendarRequest;

/**
 * Class Office365Service
 * @package App\Services
 * https://apps.dev.microsoft.com
 * http://graph.microsoft.io/en-us/docs/authorization/app_only
 * https://graph.microsoft.io/en-us/docs/overview/overview
 */
class GSuite implements CalendarProviderInterface
{
    /** @var Google_Client Google_Client  */
    protected $client;

    /** @var RoomProvider|null $calendarProvider  */
    protected $calendarProvider;

    /** @var Google_Service_Oauth2 $googleOAuthService */
    protected $googleOAuthService = null;

    /** @var Google_Service_Calendar $googleCalendarService */
    protected $googleCalendarService = null;

    /**
     * Office365Service constructor.
     * @param RoomProvider|null $calendarProvider
     */
    public function __construct(RoomProvider $calendarProvider = null)
    {
        $client = new Google_Client();
        $client->setAccessType('offline');
        $client->setApprovalPrompt ("force");
        $client->setClientId(config('services.gsuite.client_id'));
        $client->setClientSecret(config('services.gsuite.client_secret'));
        $client->addScope(Google_Service_Calendar::CALENDAR);
        $client->addScope(Google_Service_Oauth2::USERINFO_EMAIL);
        $client->setRedirectUri(config('services.gsuite.redirect'));

        $this->client = $client;
        $this->calendarProvider = $calendarProvider;
        if(isset($this->calendarProvider->token)) {
            $this->setAccessToken([
                'access_token' => $this->calendarProvider->token,
                'refresh_token' => $this->calendarProvider->refresh_token,
                'expires_in' => $this->calendarProvider->expires->diffInSeconds()
            ]);
        }
    }

    /**
     * Redirects the user so they can use oAuth
     */
    public function redirectUrl()
    {
        return $this->client->createAuthUrl();
    }

    /**
     * Gets the token from the auth code
     *
     * @param Request $request
     * @return mixed
     * @throws InvalidTokenRequest
     */
    public function getToken(Request $request)
    {
        try {
            return $this->setAccessToken($this->client->fetchAccessTokenWithAuthCode($request->get('code')));
        } catch (Google_Service_Exception $e) {
            throw new InvalidTokenRequest($e->getMessage());
        }
    }

    /**
     * @return mixed
     * @throws InvalidUserRequest
     */
    public function getUserEmail()
    {
        try {
            return $this->googleOAuthService->userinfo->get()->email;
        } catch (Google_Service_Exception $e) {
            throw new InvalidUserRequest($e->getMessage());
        }
    }

    /**
     * Gets all the calendars associated
     * @return array
     * @throws InvalidRoomsRequest
     * @internal param bool $roomsOnly
     */
    public function getRooms()
    {
        $rooms = [];

        try {
            $calendarList = $this->googleCalendarService->calendarList->listCalendarList([
                'maxResults' => 250
            ]);

            /** @var \Google_Service_Calendar_CalendarListEntry $room */
            foreach($calendarList->getItems() as $room) {
                if(str_contains(strtolower($room->getSummary()), 'room')) {
                    $rooms[] = [
                        'room' => $room->getId(),
                        'name' => $room->getSummary(),
                    ];
                }
            }

            return $rooms;
        } catch (Google_Service_Exception $e) {
            throw new InvalidRoomsRequest($e->getMessage());
        }

    }

    /**
     * @param $roomOwner
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    public function getRoomsCalendar($roomOwner)
    {
       return $roomOwner;
    }

    /**
     * @param Room $room
     * @param Carbon $start
     * @param Carbon $end
     * @return array
     */
    public function createBooking(Room $room, Carbon $start, Carbon $end)
    {
        $event = new Google_Service_Calendar_Event(array(
            'start' => array(
                'dateTime' => $start->toRfc3339String(),
                'timeZone' => "UTC",
            ),
            'end' => array(
                'dateTime' => $end->toRfc3339String(),
                'timeZone' => 'UTC',
            ),
        ));

        $event->setLocation($room->name);
        $event->setSummary('Quick Booking');
        $event->setDescription('Booked through SpacePad');

        $event = $this->googleCalendarService->events->insert($room->provider_calendar_id, $event);

        return [
            'attendees' => [],
            'id' => $event->getId(),
            'room_id' => $room->id,
            'link' => $event->getHtmlLink(),
            'subject' => $event->getSummary(),
            'location' => $event->getLocation(),
            'organizer' => $event->getOrganizer()->getDisplayName(),
            'organizer_email' => $event->getOrganizer()->getEmail(),
        ];
    }

    /**
     * @param Room $room
     * @param RoomEvent $roomEvent
     * @param Carbon $start
     * @param Carbon $end
     * @throws InvalidBookingRequest
     */
    public function updateBooking(Room $room, RoomEvent $roomEvent, Carbon $start, Carbon $end)
    {
        try {
            $this->googleCalendarService->events->patch($room->provider_calendar_id, $roomEvent->event_id, new Google_Service_Calendar_Event([
                    'start' => array(
                        'dateTime' => $start->toRfc3339String(),
                        'timeZone' => "UTC",
                    ),
                    'end' => array(
                        'dateTime' => $end->toRfc3339String(),
                        'timeZone' => 'UTC',
                    )
                ])
            );
        } catch(Google_Service_Exception $e) {
            throw new InvalidBookingRequest($e->getMessage());
        }
    }

    /**
     * Gets all the calendars event, given the calendar ID
     *
     * @param Room $room
     * @param Carbon $startDateTime
     * @param Carbon $endDateTime
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    public function getCalendarEvents(
        Room $room,
        Carbon $startDateTime = null,
        Carbon $endDateTime = null
    ) {

        if (empty($startDateTime)) {
            $startDateTime = Carbon::now()->startOfDay();
        }

        if (empty($endDateTime)) {
            $endDateTime = $startDateTime->copy()->endOfDay();
        }

        try {

            /** @var \Google_Service_Calendar_Events $events */
            $eventsList = $this->googleCalendarService->events->listEvents($room->provider_calendar_id, [
                'timeMin' => $startDateTime->toRfc3339String(),
                'timeMax' => $endDateTime->toRfc3339String(),
                'maxResults' => 1440
            ]);

            $events = [];

            /** @var Google_Service_Calendar_Event $event */
            foreach($eventsList->getItems() as $event) {
                $eventData = [
                    'attendees' => [],
                    'id' => $event->getId(),
                    'room_id' => $room->id,
                    'link' => $event->getHtmlLink(),
                    'subject' => $event->getSummary(),
                    'location' => $event->getLocation(),
                    'organizer' => $event->getOrganizer()->getDisplayName(),
                    'organizer_email' => $event->getOrganizer()->getEmail(),
                    'end_date' => Carbon::parse($event->getEnd()->dateTime, $event->getEnd()->timeZone)->tz('UTC'),
                    'start_date' => Carbon::parse($event->getStart()->dateTime, $event->getStart()->timeZone)->tz('UTC'),
                ];

                /** @var \Google_Service_Calendar_EventAttendee $attendee */
                foreach($event->getAttendees() as $attendee) {
                    $eventData['attendees'][] = [
                        'name' => $attendee->getDisplayName(),
                        'email'=> $attendee->getEmail(),
                        'status' => $attendee->getResponseStatus()
                    ];
                }
                $events[] = $eventData;
            }

            return $events;

        } catch (Google_Service_Exception $e) {
            throw new InvalidCalendarRequest($e->getMessage());
        }
    }

    /**
     * @param $token
     * @return mixed
     */
    protected function setAccessToken($token)
    {
        $this->googleOAuthService = new Google_Service_Oauth2($this->client);
        $this->googleCalendarService = new Google_Service_Calendar($this->client);
        $this->client->setAccessToken($token);

        return $token;
    }

}