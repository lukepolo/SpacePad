<?php

namespace App\Providers;

use App\Contracts\CalendarServiceContract;
use App\Services\CalendarService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            CalendarServiceContract::class,
            CalendarService::class
        );
    }
}
