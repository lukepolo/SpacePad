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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // TODO - not sure why its return an array.....?
        return response()->json(
            Room::where('user_id', auth()->user()->id)->findOrFail($id)[0]
        );
    }
}
