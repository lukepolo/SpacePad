<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class RoomEvent extends Model
{
    protected $guarded = [
        'id'
    ];

    protected $with = [
      'attendees'
    ];

    /*
     |--------------------------------------------------------------------------
     | Relations
     |--------------------------------------------------------------------------
     |
     */

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function attendees()
    {
        return $this->hasMany(EventAttendee::class);
    }

    /*
    |--------------------------------------------------------------------------
    | Scopes
    |--------------------------------------------------------------------------
    |
    */

    public function scopeTodaysEvents($query)
    {
        return $query->whereBetween('start_date', [
            Carbon::today(),
            Carbon::tomorrow()
        ]);
    }

}
