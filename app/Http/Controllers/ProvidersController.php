<?php

namespace App\Http\Controllers;

use App\Models\RoomProvider;

class ProvidersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            RoomProvider::where('user_id', auth()->user()->id)->get()
        );
    }
}
