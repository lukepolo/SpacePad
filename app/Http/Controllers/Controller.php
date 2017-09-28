<?php

namespace App\Http\Controllers;

use App\Contracts\CalendarServiceContract as CalendarService;
use App\Models\Calendar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    private $calendarService;

    /**
     * Controller constructor.
     * @param \App\Services\CalendarService | CalendarService $calendarService
     */
    public function __construct(CalendarService $calendarService)
    {

        $this->calendarService = $calendarService;
    }

    /**
     * @param Request $request
     * @return $this|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View|mixed
     */
    public function app(Request $request)
    {
        if (Auth::check()) {
            return view('app', [
                'user' => \Auth::user(),
            ]);
        }

        if ($request->has('ref')) {
            return response()->view('landing')->withCookie(cookie('referrer', $request->input('ref')));
        }

        return view('landing');
    }

    public function getRooms()
    {
        $provider = 'office365';

//        $rooms = $this->calendarService->getRooms($provider);

        $calendar = $this->calendarService->getCalendar($provider, [
            "name" => "Standing Desk",
            "provider_calendar_id" => "standingdesk@forcemed.com"
        ]);

        dd($calendar);


        Calendar::firstOrCreate([
            'provider' => $provider,
            'user_id' => auth()->user()->id,
            'name' => $calendars[4]['name'],
            'provider_calendar_id' => $calendars[4]['provider_calendar_id'],
        ]);

        return $calendars;
    }

    public function getCalendarEvents($calendarId)
    {
        dd($this->calendarService->getCalendarEvents($calendarId));
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function redirectToApp()
    {
        return redirect(config('app.url'));
    }
}
