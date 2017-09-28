<?php

namespace App\Services\CalendarProviders;

use Carbon\Carbon;
use GuzzleHttp\Client;
use App\Models\Calendar;
use Illuminate\Http\Request;
use App\Models\CalendarProvider;
use Illuminate\Support\Collection;
use Illuminate\Http\RedirectResponse;
use App\Exceptions\InvalidTokenRequest;
use GuzzleHttp\Exception\ClientException;
use App\Exceptions\InvalidCalendarRequest;

/**
 * Class Office365Service
 * @package App\Services
 * https://apps.dev.microsoft.com
 * http://graph.microsoft.io/en-us/docs/authorization/app_only
 * https://graph.microsoft.io/en-us/docs/overview/overview
 */
class Office365
{
    private $calendarProvider;

    private $loginURL = "https://login.microsoftonline.com";

    protected $tokenURL = "/common/oauth2/v2.0/token";
    protected $authorizeURL = '/common/oauth2/v2.0/authorize';
    protected $graphApiURL = "https://graph.microsoft.com/v1.0";
    protected $outlookApiURL = "https://outlook.office.com/api/beta";

    protected $redirectURL;
    protected $applicationId;
    protected $applicationSecret;

    protected $graphScopes = [
        'https://graph.microsoft.com/User.ReadBasic.All',
        'https://graph.microsoft.com/Calendars.ReadWrite',
        'offline_access',
    ];

    protected $outlookScopes = [
        'https://outlook.office.com/User.ReadBasic.All',
        'https://outlook.office.com/Calendars.ReadWrite',
        'offline_access',
    ];

    /**
     * Office365Service constructor.
     * @param CalendarProvider|null $calendarProvider
     */
    public function __construct(CalendarProvider $calendarProvider = null)
    {
        $this->calendarProvider = $calendarProvider;
        $this->redirectURL = config('services.office365.redirect');
        $this->applicationId = config('services.office365.application_id');
        $this->applicationSecret = config('services.office365.application_secret');
    }

    /**
     * Redirects the user so they can use oAuth
     * @return RedirectResponse
     */
    public function redirect()
    {
        return new RedirectResponse(
            $this->loginURL.$this->authorizeURL.'?'.
            http_build_query([
                'client_id' => $this->applicationId,
                'redirect_uri' => $this->redirectURL,
                'scope' => $this->formatScopes($this->graphScopes),
                'response_type' => 'code',
                'response_mode' => 'query'
            ])
        );
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
        $client = new Client([
            'form_params' => [
                "client_id" => $this->applicationId,
                "client_secret" => $this->applicationSecret,
                "code" => $request->get('code'),
                "grant_type" => "authorization_code",
                "redirect_uri" => $this->redirectURL,
            ]
        ]);

        try {
            return json_decode($client->post($this->loginURL . $this->tokenURL)->getBody()->getContents());
        } catch (ClientException $e) {
            throw new InvalidTokenRequest($e->getResponse()->getBody()->getContents());
        }
    }

    /**
     * Refreshse a token based on its type
     *
     * @param string $scopeType
     * @return mixed
     * @throws InvalidTokenRequest
     */
    public function refreshToken($scopeType = 'graph')
    {
        $client = new Client([
            'form_params' => [
                "client_id" => $this->applicationId,
                "client_secret" => $this->applicationSecret,
                "refresh_token" => $this->calendarProvider->refresh_token,
                "grant_type" => "refresh_token",
                "redirect_uri" => $this->redirectURL,
                "scope" => $this->formatScopes($this->{$scopeType.'Scopes'})
            ]
        ]);

        try {
            $tokenData =  json_decode($client->post($this->loginURL . $this->tokenURL)->getBody());
        } catch (ClientException $e) {
            throw new InvalidTokenRequest($e->getResponse()->getBody()->getContents());
        }

        $this->calendarProvider->update([
            'token' => $tokenData->access_token,
            'refresh_token' => $tokenData->refresh_token,
            'expires' => Carbon::now()->addSecond($tokenData->expires_in)
        ]);
    }

    /**
     * Checks to see if we need to refresh a token
     * @param CalendarProvider $calendarProvider
     * @return CalendarProvider
     */
    private function checkRefreshToken(CalendarProvider $calendarProvider)
    {
        if ($calendarProvider->isExpired()) {
            $this->refreshToken();
        }

        return $calendarProvider;
    }

    /**
     * Gets all the calendars associated
     * @return array
     * @throws InvalidCalendarRequest
     * @internal param bool $roomsOnly
     */
    public function getRooms()
    {
        $this->refreshToken('outlook');

        $rooms = [];

        $response = $this->makeApiCall("GET", "$this->outlookApiURL/me/findrooms");

        foreach($response->value as $room) {
            $rooms[] = [
                'name' => $room->Name,
                'owner' => $room->Address,
            ];
        }

        $this->refreshToken();

        return $rooms;
    }

    public function getRoomsCalendar($room)
    {
        try{

            $roomCalendars = $this->makeApiCall("GET", 'https://graph.microsoft.com/v1.0/users/' . $room['owner'] . '/calendars');

            $room['id'] = $roomCalendars->value[0]->id;

            return $room;

        }  catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
        }
    }

    /**
     * Gets all the calendars event, given the calendar ID
     *
     * @param Calendar $calendar
     * @param Carbon $startDateTime
     * @param Carbon $endDateTime
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    public function getCalendarEvents(
        Calendar $calendar,
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
            return $this->getPaginatedData(
                $this->makeApiCall(
                    "GET",
                    $this->graphApiURL . '/users/' . $calendar->provider_calendar_owner . '/calendars/' . $calendar->provider_calendar_id . '/calendarView?startDateTime=' . $startDateTime->format('Y-m-d\TH:i:s.0000000') . '&endDateTime=' . $endDateTime->format('Y-m-d\TH:i:s.0000000')
                )
            );
        } catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
        }
    }

//
//    /**
//     * Creates a calendar booking
//     *
//     * @param OfficeOauthToken $token
//     * @param Space $space
//     * @param $minutes
//     * @return mixed
//     * @throws SpaceError
//     */
//    public function makeCalendarEvent(OfficeOauthToken $token, Space $space, $minutes)
//    {
//        $startDateTime = Carbon::now();
//        $endDateTime = $startDateTime->copy()->addMinutes($minutes);
//
//        $endDateTime->minute(round($endDateTime->minute / 15) * 15);
//
//        $conflictedMeetings = $this->getCalendarEvents($token, $space->calendar, $startDateTime, $endDateTime)->value;
//        if (count($conflictedMeetings) > 0) {
//            foreach ($conflictedMeetings as $conflictedMeeting) {
//                $this->calendarService->saveEvent($space->calendar, $conflictedMeeting);
//            }
//
//            event(new SpaceChanged($space));
//
//            throw new SpaceError('Sorry, the space has already been booked at this time');
//        }
//
//        try {
//            return $this->makeApiCall(
//                $token,
//                "POST",
//                $this->graphApiURL . '/users/' . $space->calendar->owner . '/calendars/' . $space->calendar->calendar_id . '/events',
//                [
//                    "subject" => "Quick Booking",
//                    "location" => [
//                        "displayName" => $space->name
//                    ],
//                    "start" => [
//                        'dateTime' => $startDateTime->toW3cString(),
//                        'timeZone' => $startDateTime->tzName
//                    ],
//                    "end" => [
//                        'dateTime' => $endDateTime->toW3cString(),
//                        'timeZone' => $endDateTime->tzName
//                    ],
//                    "body" => ["contentType" => "HTML", "content" => "Booked through CalSync"]
//                ]
//            );
//        } catch (ClientException $e) {
//            throw new SpaceError($e->getResponse()->getBody()->getContents());
//        }
//    }
//
//    /**
//     * Ends the current event
//     *
//     * @param OfficeOauthToken $token
//     * @param Space $space
//     * @param CalendarEvent $event
//     * @return mixed
//     * @throws SpaceError
//     */
//    public function endCalendarEvent(OfficeOauthToken $token, Space $space, CalendarEvent $event)
//    {
//        $now = Carbon::now();
//        try {
//            return $this->makeApiCall(
//                $token,
//                "PATCH",
//                $this->graphApiURL . '/users/' . $space->calendar->owner . '/calendars/' . $space->calendar->calendar_id . '/events/' . $event->event_id,
//                [
//                    "end" => [
//                        'dateTime' => $now->toW3cString(),
//                        'timeZone' => $now->tzName
//                    ],
//                ]
//            );
//        } catch (ClientException $e) {
//            throw new SpaceError($e->getResponse()->getBody()->getContents());
//        }
//    }
//
//    /**
//     * Ends the current event
//     *
//     * @param OfficeOauthToken $token
//     * @param Space $space
//     * @param CalendarEvent $event
//     * @return mixed
//     * @throws SpaceError
//     */
//    public function startCalendarEvent(OfficeOauthToken $token, Space $space, CalendarEvent $event)
//    {
//        $now = Carbon::now();
//        try {
//            return $this->makeApiCall(
//                $token,
//                "PATCH",
//                $this->graphApiURL . '/users/' . $space->calendar->owner . '/calendars/' . $space->calendar->calendar_id . '/events/' . $event->event_id,
//                [
//                    "start" => [
//                        'dateTime' => $now->toW3cString(),
//                        'timeZone' => $now->tzName
//                    ],
//                ]
//            );
//        } catch (ClientException $e) {
//            throw new SpaceError($e->getResponse()->getBody()->getContents());
//        }
//    }
//
//    /**
//     * Extends a calendar event
//     *
//     * @param OfficeOauthToken $token
//     * @param Space $space
//     * @param CalendarEvent $event
//     * @param $minutes
//     * @return mixed
//     * @throws SpaceError
//     */
//    public function extendCalendarEvent(OfficeOauthToken $token, Space $space, CalendarEvent $event, $minutes)
//    {
//        $startDateTime = $event->end_date->copy()->addSecond();
//        $endDateTime = $event->end_date->addMinutes($minutes);
//        $endDateTime->minute(round($endDateTime->minute / 15) * 15);
//
//        if (count($this->getCalendarEvents($token, $space->calendar, $startDateTime, $endDateTime)->value)) {
//            throw new SpaceError('Sorry, the space has already been booked at this time');
//        }
//
//        try {
//            return $this->makeApiCall(
//                $token,
//                "PATCH",
//                $this->graphApiURL . '/users/' . $space->calendar->owner . '/calendars/' . $space->calendar->calendar_id . '/events/' . $event->event_id,
//                [
//                    "end" => [
//                        'dateTime' => $endDateTime->toW3cString(),
//                        'timeZone' => $endDateTime->tzName
//                    ],
//                ]
//            );
//        } catch (ClientException $e) {
//            throw new SpaceError($e->getResponse()->getBody()->getContents());
//        }
//    }

    /**
     * Gets the next set of paginated data based on a response from office365
     * @param $response
     * @param Collection $data
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    private function getPaginatedData($response, Collection $data = null)
    {
        if(empty($data)) {
            $data = collect();
        }

        foreach($response->value as $datum) {
            $data->push($datum);
        }

        if (isset($eventObject->{"@odata.nextLink"})) {
            try {
                return $this->getPaginatedData($this->makeApiCall("GET", $response->{"@odata.nextLink"}), $data);
            } catch (ClientException $e) {
                throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
            }
        }

        return $data;
    }

    /**
     * Makes an API Call
     * @param $method
     * @param $url
     * @param null $payload
     * @return mixed
     */
    private function makeApiCall($method, $url, $payload = null)
    {
        $this->calendarProvider = $this->checkRefreshToken($this->calendarProvider);

        $client = new Client([
            'headers' => [
                "Content-type" => "application/json",
                "Authorization" => 'Bearer ' . $this->calendarProvider->token
            ]
        ]);

        switch (strtoupper($method)) {
            case "GET":
                $response = $client->get($url);
                break;
            case "POST":
                $response = $client->post($url, [
                    'json' => $payload
                ]);
                break;
            case "PATCH":
                $response = $client->patch($url, [
                    'json' => $payload
                ]);
                break;
            case "DELETE":
                break;
            default:
                dd("INVALID METHOD: " . $method);
                exit;
        }

        return json_decode($response->getBody()->getContents());
    }

    /**
     * Format the given scopes.
     *
     * @param  array $scopes
     * @return string
     */
    private function formatScopes(array $scopes)
    {
        return implode(' ', $scopes);
    }
}