'use strict';

var gulp = require('gulp')
var compass = require('gulp-compass')
var plumber = require('gulp-plumber')
var livereload = require('gulp-livereload')

gulp.task('sass', function () {
	gulp.src('./src/sass/**/*.scss')
	  .pipe(plumber())
	  .pipe(compass({
	  	config_file: './config.rb',
	  	css: 'public/css',
	  	sass: 'src/sass'
	  }))
	  .pipe(gulp.dest('./public/css'))
	  .pipe(livereload())
})

gulp.task('sass:watch', function () {
	livereload.listen()
	gulp.watch('./src/sass/**/*.scss', ['sass'])
})