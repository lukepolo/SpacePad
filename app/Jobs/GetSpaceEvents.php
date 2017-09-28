<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class GetSpaceEvents implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
//        $this->office365Service = $office365Service;
//        $this->calendarService = $calendarService;
//        $this->oauthToken = $this->space->user->officeToken;
//
//        $this->saveEvents($this->office365Service->getCalendarEvents($this->oauthToken, $this->space->calendar));
    }

    /**
     * Gets more of the events
     *
     * @param $url
     */
    private function getMoreEvents($url)
    {
        $this->saveEvents($this->office365Service->getCalendarEventsFromUrl($this->oauthToken, $url));
    }

    /**
     * Saves the events
     *
     * @param $events
     */
    private function saveEvents($events)
    {
        foreach ($events->value as $event) {
            $this->calendarService->saveEvent($this->space->calendar, $event);
        }


        if (isset($events->{"@odata.nextLink"})) {
            $this->getMoreEvents($events->{"@odata.nextLink"});
        }
    }
}
