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

        $rooms = $this->calendarService->getRooms($provider);

        $calendar = $this->calendarService->getCalendar($provider, [
            "name" => "Standing Desk",
            "owner" => "lpolicinski@forcemed.com"
        ]);

        Calendar::firstOrCreate([
            'provider' => $provider,
            'name' => $calendar['name'],
            'user_id' => auth()->user()->id,
            'provider_calendar_id' => $calendar['id'],
            'provider_calendar_name' => $calendar['name'],
            'provider_calendar_owner' => $calendar['owner'],
        ]);

        return $rooms;
    }

    public function getCalendarEvents($calendarId)
    {
        dd();
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function redirectToApp()
    {
        return redirect(config('app.url'));
    }
}
