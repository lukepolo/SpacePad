<?php

namespace App\Http\Controllers;

use App\Models\Room;

class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            Room::where('user_id', auth()->user()->id)->get()
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  Room $room
     * @return \Illuminate\Http\Response
     */
    public function show($room)
    {
        return response()->json($room);
    }
}
