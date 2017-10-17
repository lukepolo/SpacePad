<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function() {

    Route::apiResource('users', 'UsersController');

    Route::get('providers', 'ProvidersController@index');
    Route::apiResource('providers.rooms', 'ProviderRoomsController');

    Route::apiResource('rooms', 'RoomsController');
    Route::apiResource('rooms.events', 'RoomEventsController');
});
