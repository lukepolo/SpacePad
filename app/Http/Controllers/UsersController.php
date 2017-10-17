<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UserUpdateRequest;

class UsersController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param UserUpdateRequest $request
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update([
            'name' => $request->get('name'),
            'email' => $request->get('email')
        ]);

        if ($request->has('password') && !empty($request->get('password'))) {
            $user->update([
                'password' => bcrypt($request->get('password'))
            ]);
        }

        return response()->json($user);
    }

}
