const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js("resources/assets/js/app.js", "public/js")
    .sass("resources/assets/sass/app.scss", "public/css")
    .extract([
        "vue",
        "vuex",
        "axios",
        "lodash",
        "raven-js",
        "nprogress",
        "pusher-js",
        "vue-router",
        "laravel-echo",
        "moment-timezone",
        "moment-precise-range-plugin"
    ])
    .autoload({
        vue: "Vue",
        lodash: "_",
        "pusher-js": "Pusher"
    })
    .sourceMaps()
    .version()
    .browserSync({
        open: "external",
        host: "space-pad.dev",
        proxy: "space-pad.dev",
        files: [
            "resources/views/**/*.php",
            "public/js/**/*.js",
            "public/css/**/*.css"
        ]
    });
