<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $guarded = [
        'id'
    ];

    protected $casts = [
        'features' => 'array'
    ];

    /*
     |--------------------------------------------------------------------------
     | Relations
     |--------------------------------------------------------------------------
     |
     */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function events()
    {
        return $this->hasMany(RoomEvent::class);
    }

    public function roomProvider()
    {
        return $this->belongsTo(RoomProvider::class);
    }

}
