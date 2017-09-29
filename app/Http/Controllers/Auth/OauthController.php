<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use App\Contracts\CalendarServiceContract as CalendarService;

class OauthController extends Controller
{
    private $calendarService;

    /**
     * OauthController constructor.
     * @param \App\Services\CalendarService | CalendarService $calendarService
     */
    public function __construct(CalendarService $calendarService)
    {
        $this->calendarService = $calendarService;
    }

    /**
     * Handles provider requests.
     *
     * @param Request $request
     * @param $provider
     * @return mixed
     */
    public function newProvider(Request $request, $provider)
    {
        Session::put('url.intended', $request->headers->get('referer'));

        $scopes = null;

        // todo - set the session state here
        return $this->calendarService->authRedirect($provider);
    }

    /**
     * Handles the request from the provider.
     *
     * @param Request $request
     * @param $provider
     * @return mixed
     */
    public function getHandleProviderCallback(Request $request, $provider)
    {
        $roomProvider = $this->calendarService->getToken($provider, $request);

        // TODO - redirect to room selection
        return redirect('/')->withSuccess("You have connected your $provider account");
    }
}
