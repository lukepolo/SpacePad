<?php

namespace App\Services\CalendarProviders;

use Carbon\Carbon;
use App\Models\Room;
use GuzzleHttp\Client;
use App\Models\RoomEvent;
use Illuminate\Http\Request;
use App\Models\RoomProvider;
use Illuminate\Support\Collection;
use App\Exceptions\InvalidUserRequest;
use App\Exceptions\InvalidRoomsRequest;
use App\Exceptions\InvalidTokenRequest;
use App\Exceptions\InvalidBookingRequest;
use GuzzleHttp\Exception\ClientException;
use App\Exceptions\InvalidCalendarRequest;

/**
 * Class Office365Service
 * @package App\Services
 * https://apps.dev.microsoft.com
 * http://graph.microsoft.io/en-us/docs/authorization/app_only
 * https://graph.microsoft.io/en-us/docs/overview/overview
 */
class Office365 implements CalendarProviderInterface
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
        'https://graph.microsoft.com/Calendars.ReadWrite.Shared',
        'offline_access',
    ];

    protected $outlookScopes = [
        'https://outlook.office.com/User.ReadBasic.All',
        'https://outlook.office.com/Calendars.ReadWrite.Shared',
        'offline_access',
    ];

    /**
     * Office365Service constructor.
     * @param RoomProvider|null $calendarProvider
     */
    public function __construct(RoomProvider $calendarProvider = null)
    {
        $this->calendarProvider = $calendarProvider;
        $this->redirectURL = config('services.office365.redirect');
        $this->applicationId = config('services.office365.application_id');
        $this->applicationSecret = config('services.office365.application_secret');
    }

    /**
     * Redirects the user so they can use oAuth
     */
    public function redirectUrl()
    {
        return $this->loginURL.$this->authorizeURL.'?'.
            http_build_query([
                'client_id' => $this->applicationId,
                'redirect_uri' => $this->redirectURL,
                'scope' => $this->formatScopes($this->graphScopes),
                'response_type' => 'code',
                'response_mode' => 'query'
            ]);
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
            return json_decode($client->post($this->loginURL . $this->tokenURL)->getBody()->getContents(), true);
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
            $response = $this->makeApiCall("GET", "$this->graphApiURL/me");
        } catch (ClientException $e) {
            throw new InvalidUserRequest($e->getResponse()->getBody()->getContents());
        }

        return $response->mail;
    }

    /**
     * Gets all the calendars associated
     * @return array
     * @throws InvalidRoomsRequest
     * @internal param bool $roomsOnly
     */
    public function getRooms()
    {
        $this->refreshToken('outlook');

        $rooms = [];

        try {
            $response = $this->makeApiCall("GET", "$this->outlookApiURL/me/findrooms");

            foreach($response->value as $room) {
                $rooms[] = [
                    'name' => $room->Name,
                    'room' => $room->Address,
                ];
            }

            $this->refreshToken();

            return $rooms;
        } catch (ClientException $e) {
            throw new InvalidRoomsRequest($e->getResponse()->getBody()->getContents());
        }

    }

    /**
     * @param $roomOwner
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    public function getRoomsCalendar($roomOwner)
    {
        try{
            $roomCalendars = $this->makeApiCall("GET", 'https://graph.microsoft.com/v1.0/users/' . $roomOwner . '/calendars');
            return $roomCalendars->value[0]->id;
        }  catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
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
            return $this->getPaginatedData(
                $this->makeApiCall(
                    "GET",
                    $this->graphApiURL . '/users/' . $room->provider_calendar_owner . '/calendars/' . $room->provider_calendar_id . '/calendarView?startDateTime=' . $startDateTime->format('Y-m-d\TH:i:s.0000000') . '&endDateTime=' . $endDateTime->format('Y-m-d\TH:i:s.0000000')
                )
            )->map(function($event) use($room) {
                $eventData = [
                    'attendees' => [],
                    'id' => $event->id,
                    'room_id' => $room->id,
                    'link' => $event->webLink,
                    'subject' => $event->subject,
                    'location' => $event->location->displayName,
                    'organizer' => $event->organizer->emailAddress->name,
                    'organizer_email' => $event->organizer->emailAddress->address,
                    'end_date' => Carbon::parse($event->end->dateTime, $event->end->timeZone)->tz('UTC'),
                    'start_date' => Carbon::parse($event->start->dateTime, $event->start->timeZone)->tz('UTC'),
                ];

                foreach($event->attendees as $attendee) {

                    $status = $attendee->status->response;
                    switch(strtolower($attendee->status->response)) {
                        case 'none' :
                            $status = 'needsAction';
                            break;
                        // accepted
                        // declined
                    }

                    $eventData['attendees'][] = [
                        'name' => $attendee->emailAddress->name,
                        'email'=> $attendee->emailAddress->address,
                        'status' => $status
                    ];
                }

                return $eventData;
            });
        } catch (ClientException $e) {
            throw new InvalidCalendarRequest($e->getResponse()->getBody()->getContents());
        }
    }

    /**
     * @param Room $room
     * @param Carbon $start
     * @param Carbon $end
     * @return array
     * @throws InvalidBookingRequest
     */
    public function createBooking(Room $room, Carbon $start, Carbon $end)
    {
        try {
            $event = $this->makeApiCall(
                "POST",
                $this->graphApiURL . '/users/' . $room->provider_calendar_owner . '/calendars/' . $room->provider_calendar_id . '/events', [
                    "subject" => "Quick Booking",
                    "location" => [
                        "displayName" => $room->name
                    ],
                    "start" => [
                        'dateTime' => $start->toW3cString(),
                        'timeZone' => $end->tzName
                    ],
                    "end" => [
                        'dateTime' => $end->toW3cString(),
                        'timeZone' => $end->tzName
                    ],
                    "body" => ["contentType" => "HTML", "content" => "Booked through SpacePad"]
                ]
            );

            return [
                'attendees' => [],
                'id' => $event->id,
                'room_id' => $room->id,
                'link' => $event->webLink,
                'subject' => $event->subject,
                'location' => $event->location->displayName,
                'organizer' => $event->organizer->emailAddress->name,
                'organizer_email' => $event->organizer->emailAddress->address,
                'end_date' => Carbon::parse($event->end->dateTime, $event->end->timeZone)->tz('UTC'),
                'start_date' => Carbon::parse($event->start->dateTime, $event->start->timeZone)->tz('UTC'),
            ];


        } catch (ClientException $e) {
            throw new InvalidBookingRequest($e->getResponse()->getBody()->getContents());
        }
    }

    /**
     * @param Room $room
     * @param RoomEvent $roomEvent
     * @param Carbon $start
     * @param Carbon $end
     * @return mixed
     * @throws InvalidBookingRequest
     */
    public function updateBooking(Room $room, RoomEvent $roomEvent, Carbon $start, Carbon $end)
    {
        try {
            return $this->makeApiCall(
                "PATCH",
                $this->graphApiURL . '/users/' . $room->provider_calendar_owner . '/calendars/' . $room->provider_calendar_id . '/events/' . $roomEvent->event_id,
                [
                    "start" => [
                        'dateTime' => $start->toW3cString(),
                        'timeZone' => $end->tzName
                    ],
                    "end" => [
                        'dateTime' => $end->toW3cString(),
                        'timeZone' => $end->tzName
                    ],
                ]
            );
        } catch (ClientException $e) {
            throw new InvalidBookingRequest($e->getResponse()->getBody()->getContents());
        }
    }

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