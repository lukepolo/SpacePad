<?php

namespace App\Jobs;

use App\Models\Calendar;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Contracts\CalendarServiceContract as CalendarService;

class GetCalendarEvents implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $calendarService;

    /**
     * Create a new job instance.
     *
     * @param \App\Services\CalendarService | CalendarService $calendarService
     */
    public function __construct(CalendarService $calendarService)
    {
        $this->calendarService = $calendarService;
    }

    /**
     * Execute the job.
     *
     * @param Calendar $calendar
     * @return void
     */
    public function handle(Calendar $calendar)
    {
        $this->calendarService->getCalendarEvents($calendar);
    }
}
