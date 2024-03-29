<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Space Pad</title>

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

</head>
<body>

    <div class="SpacePad">

        @if(Route::has('login'))
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>
            @endauth
        @endif

        @yield('content')

    </div>

    @stack('scripts')

</body>
</html>