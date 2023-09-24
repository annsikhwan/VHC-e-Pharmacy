const mix = require("laravel-mix");

mix.js("resources/js/homepage/App.js", "public/js/homepage.js")
    .sass("resources/sass/app.scss", "public/css")
    .react(); // Optional: Enable source maps for better debugging

// Additional Mix configurations can be added here
