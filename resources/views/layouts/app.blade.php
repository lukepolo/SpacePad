<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        @include('layouts.core.favicon')

        <title>Space Pad</title>

        <!-- Styles -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

        <!-- Scripts -->
        <script>
            window.Laravel = <?php echo json_encode([
                'env' => config('app.env'),
                'csrfToken' => csrf_token(),
                'version' => app()->make('gitCommit'),
                'stripeKey' => config('services.stripe.key'),
                'pusherKey' => config('broadcasting.connections.pusher.key'),
            ]); ?>
        </script>
        @if(config('app.env') == 'production' && \Auth::check())
            {{--full story code here--}}
        @endif
    </head>
    <body>
        <div id="app-layout">
            <navigation></navigation>
            <div id="main">
                @yield('content')
            </div>
        </div>

        @stack('scripts')

        @if(\Auth::check())

            <script src="https://js.stripe.com/v3/"></script>

            <!-- Scripts -->
            <script src="{{ mix('/js/manifest.js') }}"></script>
            <script src="{{ mix('/js/vendor.js') }}"></script>
            <script src="{{ mix('/js/app.js') }}"></script>


            {{--@include('layouts.core.notifications')--}}
            @if(config('app.env') == 'production')
                <script type="text/javascript">
//                    crisp
                </script>
            @endif

        @endif

        @if($errors->count())
            <script>
                app.showError('{{ $errors->first() }}')
            </script>
        @endif
        @if (session('success'))
            <script>
                app.showSuccess('{{ session('success') }}')
            </script>
        @endif
    </body>
</html>
