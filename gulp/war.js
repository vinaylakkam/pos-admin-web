'use strict';

var gulp = require('gulp');
var war = require('gulp-war');
var zip = require('gulp-zip');

/**
 * Create war file to deploy into java container
 */
gulp.task('war', ['build'],function () {
    
    gulp.src(["dist/**/*"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'POS Admin',
        }))
        .pipe(zip('pos-admin.zip'))
        .pipe(gulp.dest("./target"));
 });