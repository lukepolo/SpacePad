<?php

namespace App\Services\CalendarProviders;

use App\Models\Room;
use Carbon\Carbon;
use Google_Client;
use Google_Service_Calendar;
use Google_Service_Exception;
use Google_Service_Oauth2;
use Illuminate\Http\Request;
use App\Models\RoomProvider;
use App\Exceptions\InvalidUserRequest;
use App\Exceptions\InvalidRoomsRequest;
use App\Exceptions\InvalidTokenRequest;
use App\Exceptions\InvalidCalendarRequest;

/**
 * Class Office365Service
 * @package App\Services
 * https://apps.dev.microsoft.com
 * http://graph.microsoft.io/en-us/docs/authorization/app_only
 * https://graph.microsoft.io/en-us/docs/overview/overview
 */
class GSuite
{
    private $calendarProvider;

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
        $client->setAccessType("offline");
        $client->setApplicationName("Client_Library_Examples");
        $client->setDeveloperKey(config('services.gsuite.client_id'));
        $client->setAuthConfig(storage_path('app/credentials/gsuite.json'));
        $client->addScope(Google_Service_Calendar::CALENDAR);
        $client->addScope(Google_Service_Oauth2::USERINFO_EMAIL);
        $client->setRedirectUri(config('services.gsuite.redirect'));

        $this->client = $client;
        $this->calendarProvider = $calendarProvider;
        if(isset($this->calendarProvider->token)) {
            $this->setAccessToken($this->calendarProvider->token);
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
            $tokenData = $this->client->fetchAccessTokenWithAuthCode($request->get('code'));

            $this->setAccessToken($tokenData['access_token']);

            return $tokenData;
        } catch (Google_Service_Exception $e) {
            throw new InvalidTokenRequest($e->getMessage());
        }
    }

    /**
     * Refreshse a token based on its type
     *
     * @return mixed
     * @throws InvalidTokenRequest
     */
    public function refreshToken()
    {
//        try {
//
//        } catch (Google_Service_Exception $e) {
//            throw new InvalidTokenRequest($e->getResponse()->getBody()->getContents());
//        }
//
//        $this->calendarProvider->update([
//            'token' => $tokenData->access_token,
//            'refresh_token' => $tokenData->refresh_token,
//            'expires' => Carbon::now()->addSecond($tokenData->expires_in)
//        ]);
    }

    /**
     * Checks to see if we need to refresh a token
     * @param RoomProvider $calendarProvider
     * @return RoomProvider
     */
    private function checkRefreshToken(RoomProvider $calendarProvider)
    {
        if ($calendarProvider->isExpired()) {
            $this->refreshToken();
        }

        return $calendarProvider;
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
            $calendarList = $this->googleCalendarService->calendarList->listCalendarList();

            /** @var \Google_Service_Calendar_CalendarListEntry $room */
            foreach($calendarList->getItems() as $room) {
                if(str_contains(strtolower($room->getSummary()), 'room')) {
                    $rooms[] = [
                        'name' => $room->getSummary(),
                        'room' => $room->getId(),
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
            ]);

            $events = [];
            /** @var \Google_Service_Calendar_Event $event */
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
                    'end_date' => Carbon::parse($event->getStart()->dateTime, $event->getStart()->timeZone)->tz('UTC'),
                    'start_date' => Carbon::parse($event->getEnd()->dateTime, $event->getEnd()->timeZone)->tz('UTC'),
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
     */
    protected function setAccessToken($token)
    {
        $this->googleOAuthService = new Google_Service_Oauth2($this->client);
        $this->googleCalendarService = new Google_Service_Calendar($this->client);
        $this->client->setAccessToken($token);
    }

}