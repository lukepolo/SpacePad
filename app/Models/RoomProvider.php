<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class RoomProvider extends Model
{
    protected $guarded = [
        'id'
    ];

    protected $dates = [
        'expires',
        'updated_at',
        'created_at'
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

    /*
     |--------------------------------------------------------------------------
     | Helpers
     |--------------------------------------------------------------------------
     |
     */
    public function isExpired()
    {
        if (Carbon::now()->addMinutes(5)->gt($this->expires)) {
            return true;
        }
        return false;
    }
}
