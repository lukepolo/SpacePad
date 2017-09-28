<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalendarEvent extends Model
{
    protected $guarded = [
        'id'
    ];

    /*
     |--------------------------------------------------------------------------
     | Relations
     |--------------------------------------------------------------------------
     |
     */

    public function calendar()
    {
        return $this->belongsTo(Calendar::class);
    }

    public function attendees()
    {
        return $this->hasMany(EventAttendee::class);
    }

    /*
     |--------------------------------------------------------------------------
     | Helpers
     |--------------------------------------------------------------------------
     |
     */

}
