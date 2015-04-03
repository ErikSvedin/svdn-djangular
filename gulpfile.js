/* Gulp packages */
var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    compass = require('gulp-compass'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyCSS = require('gulp-minify-css'),
    templateCache   = require('gulp-angular-templatecache');


var project = 'appName';
var paths = {
    templates:'./assets/templates/**/*.html',
    js:'./assets/app/**/*.js',
    scss:'./assets/styles/**/*.scss',
};


// Create a $templateCache file
gulp.task('templates', function(){
    return gulp.src(paths.templates)
        .pipe(templateCache({module: project}))
        .pipe(gulp.dest('assets/tmp'))
});


var includes = [
    // Load angular first
    'bower_components/angular/angular.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',

    // Load 3rd party libs
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-translate/angular-translate.js',
    'bower_components/angular-translate/angular-translate-loader-static-files.js',
    'bower_components/lodash/dist/lodash.js',
    'bower_components/angular-material/angular-material.js',

    // Load main.js, config.js and then app related scripts
    'assets/app/main.js',
    'assets/app/config.js',
    'assets/app/run.js',

    // The template files are concatenated into templatecache
    // Load templates preferrably before referring to them
    'assets/tmp/templates.js',
    'assets/app/routes.js',
    'assets/app/scripts/**/*.js'
];

// Build app without minification
gulp.task('js', ['templates'], function () {
    return gulp.src(includes)
        //.pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./staticfiles/js'))
});

// Watch file changes
gulp.task('watch', ['templates', 'js'], function () {
    gulp.watch(paths.templates, ['js']);
    gulp.watch(paths.js, ['js']);
});