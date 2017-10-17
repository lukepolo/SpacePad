<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;
use App\Exceptions\InvalidCalendarRequest;
use App\Contracts\CalendarServiceContract as CalendarService;

class ProviderRoomsController extends Controller
{

    private $calendarService;

    /**
     * RoomsController constructor.
     * @param \App\Services\CalendarService | CalendarService $calendarService
     */
    public function __construct(CalendarService $calendarService)
    {
        $this->calendarService = $calendarService;
    }

    /**
     * Display a listing of the resource.
     *
     * @param $provider
     * @return \Illuminate\Http\Response
     */
    public function index($provider)
    {
        return response()->json(
            $this->calendarService->getRooms($provider)
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param $provider
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $provider)
    {
        $room = $request->get('room');

        try {
            $providerCalendarId = $this->calendarService->getRoomCalendar($provider, $room);
        } catch(InvalidCalendarRequest $e) {
            return response()->json('Your user does not have access to this rooms calendar, please grant access.', 409);
        }

        return response()->json(
            Room::firstOrCreate([
                'user_id' => auth()->user()->id,
                'provider_calendar_owner' => $room,
                'room_provider_id' => $provider->id,
                'name' => $request->get('name'),
                'provider_calendar_id' => $providerCalendarId,
            ])
        );
    }
}
