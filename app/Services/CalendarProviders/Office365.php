<?php

namespace App\Services\CalendarProviders;

use App\Exceptions\InvalidCalendarRequest;
use App\Models\Calendar;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Models\CalendarProvider;
use Illuminate\Http\RedirectResponse;
use App\Exceptions\InvalidTokenRequest;
use GuzzleHttp\Exception\ClientException;

/**
 * Class Office365Service
 * @package App\Services
 * https://apps.dev.microsoft.com
 * http://graph.microsoft.io/en-us/docs/authorization/app_only
 * https://graph.microsoft.io/en-us/docs/overview/overview
 */
class Office365
{
    private $loginURL = "https://login.microsoftonline.com";

    private $tokenURL = "/common/oauth2/v2.0/token";
    private $authorizeURL = '/common/oauth2/v2.0/authorize';
    private $graphApiURL = "https://graph.microsoft.com/v1.0";
    private $outlookApiURL = "https://outlook.office.com/api/beta";

    private $applicationId;
    private $applicationSecret;
    private $redirectURL;
    private $parameters = [];

    private $graphScopes = [
        'https://graph.microsoft.com/User.ReadBasic.All',
        'https://graph.microsoft.com/Calendars.ReadWrite',
        'offline_access',
    ];

    private $outlookScopes = [
        'https://outlook.office.com/User.ReadBasic.All',
        'https://outlook.office.com/Calendars.ReadWrite',
        'offline_access',
    ];

    private $scopeSeparator = ' ';
    private $stateless = false;

    private $calendarService;
    private $calendarProvider;

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
        $this->calendarProvider = $calendarProvider;
    }

    /**
     * Redirects the user so they can use oAuth
     * @return RedirectResponse
     */
    public function redirect()
    {
        return new RedirectResponse(
            $this->buildAuthURLFromBase($this->loginURL . $this->authorizeURL, \Session::get('state'))
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
                "scope" => $this->formatScopes($this->{$scopeType.'Scopes'}, $this->scopeSeparator)
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
                'provider_calendar_id' => $room->Address,
            ];
        }

        return $rooms;

    }

    public function getRoomsCalendar($room)
    {
        $calendars = [];

        $users = $this->makeApiCall("GET", $this->graphApiURL . '/users');

        foreach ($users->value as $user) {
            if (
                (
                    str_contains(strtolower($user->displayName), 'desk') ||
                    str_contains(strtolower($user->displayName), 'room')
                )
            ) {
                dump($user);
                try {
                    foreach ($this->makeApiCall("GET",
                        'https://graph.microsoft.com/v1.0/users/' . $user->userPrincipalName . '/calendars')->value as $calendar) {
                        dd($calendar);
                        $calendars[] = [
                            'id' => $calendar->id,
                            'name' => $calendar->name,
                            'owner' => $user->userPrincipalName
                        ];
                    }
                } catch (ClientException $e) {
                    dd($e);
                    continue;
                }
            }
        }

        dd($calendars);
        return collect($calendars);

        $this->refreshToken();
        $calendars = [];

        $users = $this->makeApiCall("GET", $this->graphApiURL . '/users');

        foreach ($users->value as $user) {
            if (
                str_contains(strtolower($user->userPrincipalName), strtolower($room['provider_calendar_id']))
            ) {
                dump($user);
                dd($this->makeApiCall( "GET", 'https://graph.microsoft.com/v1.0/users/' . $user->userPrincipalName . '/calendars'));
            }
        }

        dd('here');

        try{

            dd('https://graph.microsoft.com/v1.0/users/' . $room['provider_calendar_id'] . '/calendars');
            $roomCalendars = $this->makeApiCall("GET", 'https://graph.microsoft.com/v1.0/users/' . $room['provider_calendar_id'] . '/calendars');

            dd($roomCalendars);

//                $calendars[] = [
//                    'id' => $calendar->id,
//                    'name' => $calendar->name,
//                    'owner' => $user->userPrincipalName
//                ];
        }  catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
        }
    }

    public function getCalendars($room)
    {
        try {
            $calendars = $this->makeApiCall("GET", $this->graphApiURL.'/users/' . $room['provider_calendar_id'] . '/calendars');
            dd($calendars);
            foreach ($calendars->value as $calendar) {
                $calendars[] = [
                    'id' => $calendar->id,
                    'name' => $calendar->name,
                    'owner' => $room['provider_calendar_id']
                ];
            }
        } catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
        }

        return $this->makeApiCall('get', $this->outlookApiURL.'/users/'.$room['provider_calendar_id'].'/calendars');
    }


    public function getCalendar($room)
    {
        dd($this->getCalendars($room));
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

        dd('nope need to chagne somse stuff');
        if (empty($startDateTime)) {
            $startDateTime = Carbon::now()->startOfDay();
        }

        if (empty($endDateTime)) {
            $endDateTime = $startDateTime->copy()->endOfDay();
        }

        try {
            return $this->makeApiCall(
                "GET",
                $this->outlookApiURL.'/me/calendars/'.$calendar->provider_calendar_id.'/events?startDateTime=' . $startDateTime->format('Y-m-d\TH:i:s.0000000') . '&endDateTime=' . $endDateTime->format('Y-m-d\TH:i:s.0000000')
            );
        } catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
        }
    }
//
//    /**
//     * Gets the calendars events based off a generated url
//     * @param OfficeOauthToken $token
//     * @param $url
//     * @return mixed
//     * @throws SpaceError
//     */
//    public function getCalendarEventsFromUrl(OfficeOauthToken $token, $url)
//    {
//        try {
//            return $this->makeApiCall(
//                $token,
//                "GET",
//                $url
//            );
//        } catch (ClientException $e) {
//            throw new SpaceError($e->getResponse()->getBody()->getContents());
//        }
//    }
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
     * Get the authentication URL for the provider.
     *
     * @param  string $url
     * @param  string $state
     * @return string
     */
    private function buildAuthURLFromBase($url, $state)
    {
        return $url . '?' . http_build_query($this->getCodeFields($state));
    }

    /**
     * Get the GET parameters for the code request.
     *
     * @return array
     */
    private function getCodeFields()
    {
        $fields = [
            'client_id' => $this->applicationId,
            'redirect_uri' => $this->redirectURL,
            'scope' => $this->formatScopes($this->graphScopes, $this->scopeSeparator),
            'response_type' => 'code',
            'response_mode' => 'query'
        ];

        return array_merge($fields, $this->parameters);
    }

    /**
     * Format the given scopes.
     *
     * @param  array $scopes
     * @param  string $scopeSeparator
     * @return string
     */
    private function formatScopes(array $scopes, $scopeSeparator)
    {
        return implode($scopeSeparator, $scopes);
    }
}