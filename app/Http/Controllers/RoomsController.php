<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

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


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Room $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Room $room)
    {
        $room->update([
            'name' => $request->get('name'),
            'type' => $request->get('type'),
            'features' => $request->get('features'),
            'capacity' => $request->get('capacity'),
            'comments' => $request->get('comments')
        ]);
        return response()->json($room->fresh());
    }


}
