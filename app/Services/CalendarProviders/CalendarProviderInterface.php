<?php

namespace App\Services\CalendarProviders;

use Carbon\Carbon;
use App\Models\Room;
use App\Models\RoomEvent;
use App\Models\RoomProvider;
use Illuminate\Http\Request;
use App\Exceptions\InvalidUserRequest;
use App\Exceptions\InvalidRoomsRequest;
use App\Exceptions\InvalidTokenRequest;
use App\Exceptions\InvalidBookingRequest;
use App\Exceptions\InvalidCalendarRequest;

interface CalendarProviderInterface {

    /**
     * Office365Service constructor.
     * @param RoomProvider|null $calendarProvider
     */
    public function __construct(RoomProvider $calendarProvider = null);
    /**
     * Redirects the user so they can use oAuth
     */
    public function redirectUrl();

    /**
     * Gets the token from the auth code
     *
     * @param Request $request
     * @return mixed
     * @throws InvalidTokenRequest
     */
    public function getToken(Request $request);

    /**
     * @return mixed
     * @throws InvalidUserRequest
     */
    public function getUserEmail();

    /**
     * Gets all the calendars associated
     * @return array
     * @throws InvalidRoomsRequest
     * @internal param bool $roomsOnly
     */
    public function getRooms();

    /**
     * @param $roomOwner
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    public function getRoomsCalendar($roomOwner);

    /**
     * @param Room $room
     * @param Carbon $start
     * @param Carbon $end
     * @return array
     */
    public function createBooking(Room $room, Carbon $start, Carbon $end);

    /**
     * @param Room $room
     * @param RoomEvent $roomEvent
     * @param Carbon $start
     * @param Carbon $end
     * @throws InvalidBookingRequest
     */
    public function updateBooking(Room $room, RoomEvent $roomEvent, Carbon $start, Carbon $end);

    /**
     * Gets all the calendars event, given the calendar ID
     *
     * @param Room $room
     * @param Carbon $startDateTime
     * @param Carbon $endDateTime
     * @return mixed
     * @throws InvalidCalendarRequest
     */
    public function getCalendarEvents(Room $room, Carbon $startDateTime = null, Carbon $endDateTime = null);
}