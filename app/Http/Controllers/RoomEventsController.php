<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\RoomEvent;
use Illuminate\Http\Request;
use App\Contracts\CalendarServiceContract as CalendarService;

class RoomEventsController extends Controller
{
    private $calendarService;

    /**
     * RoomEventsController constructor.
     * @param \App\Services\CalendarService | CalendarService $calendarService
     */
    public function __construct(CalendarService $calendarService)
    {
        $this->calendarService = $calendarService;
    }

    /**
     * Display a listing of the resource.
     *
     * @param $room
     * @return \Illuminate\Http\Response
     */
    public function index(Room $room)
    {
        $this->calendarService->getCalendarEvents($room);

        return response()->json(
            RoomEvent::todaysEvents()->where('room_id', $room->id)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO - book
    }

    /**
     * Display the specified resource.
     *
     * @param $room
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room, $id)
    {
        return response()->json(
            RoomEvent::with('attendees')->where('room_id', $room->id)->findOrFail($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Room $room
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Room $room, $id)
    {
        // TODO - extend
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Room $room
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room, $id)
    {
        // TODO - end early
    }
}
