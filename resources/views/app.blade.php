@extends('layouts.app')

@section('content')
    <router-view></router-view>
@endsection

@push('scripts')
    <script>
        var user = {!! $user !!};
    </script>
@endpush