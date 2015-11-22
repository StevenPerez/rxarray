var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	tape = require('gulp-tape'),
	tapColorize = require('tap-colorize'),
	plumber = require('gulp-plumber'),
	shell = require('gulp-shell');

gulp.task('browser', function() {
	gulp.src('./src/rxArray.js')
		.pipe(plumber())
		.pipe(browserify({transform: ['babelify']}))
		.pipe(rename({prefix: 'browser-'}))
		.pipe(gulp.dest('./dist/'))
		.pipe(notify('Browser compress completed!'))
});

gulp.task('browser-min', function() {
	gulp.src('./src/rxArray.js')
		.pipe(browserify({transform: ['babelify']}))
		.pipe(rename({prefix: 'browser-', suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'))
		.pipe(notify('Browser Min compress completed!'))
});

gulp.task('node', function() {
	gulp.src('./src/rxArray.js')
		.pipe(rename({prefix: 'node-'}))
		.pipe(gulp.dest('./dist/'))
		.pipe(notify('Node compress completed!'))
});

gulp.task('test', shell.task(['npm test']));

gulp.task('watch', function(){
	gulp.watch('src/rxArray.js', ['node', 'browser', 'browser-min']);
	gulp.watch('./test/spec-rxarray.js', ['test']);
});

gulp.task('default', ['watch']);