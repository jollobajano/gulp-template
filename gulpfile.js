(function(){
    'use strict';

    var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(),
	modRewrite  = require('connect-modrewrite'),
	jshint = require('gulp-jshint'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	del = require('del'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	wiredep = require('wiredep').stream,
	karmaServer = require('karma').Server,
	ngAnnotate = require('gulp-ng-annotate'),
	//csslint = require('gulp-csslint'),
	insert = require('gulp-insert');

    // Compile Our Sass
    gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	    .pipe(wiredep())
	    .pipe(plugins.sass())
	    //.pipe(csslint())
	    //.pipe(csslint.formatter())
	    .pipe(gulp.dest('dist/css'))
	    .pipe(browserSync.stream({match: '**/*.css'}));
    });
    
    
    // Lint Task
    gulp.task('lint', function() {
	return gulp.src([
	    'gulpfile.js',
	    'test/**/*.js',
	    'app/**/*.js'
	])
	    .pipe(jshint())
	    .pipe(jshint.reporter('jshint-stylish'))
	    .pipe(jshint.reporter('fail'));
    });

    gulp.task('test', function (done) {
	new karmaServer({
	    configFile: __dirname + '/karma.conf.js',
	    singleRun: true
	}, done).start();
    });

    // Concatenate & Minify JS
    gulp.task('scripts', ['lint', 'test'], function() {
	return gulp.src([
	    '!**/*-test.js',
	    'app/**/*-module.js',
	    'app/**/*.js',
	    'app/application.js'
	])
	    .pipe(insert.transform(function(contents, file) {
		var comment = '// local file: ' + file.path + '\n';
		return comment + contents;
	    }))
	    .pipe(sourcemaps.init())
            .pipe(concat('all.js'))
	    .pipe(sourcemaps.write())
            .pipe(ngAnnotate())
            .pipe(gulp.dest('dist/js'))
            .pipe(rename('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
	    .pipe(browserSync.stream());
    });

    gulp.task('html', function() {
	return gulp.src(['app/**/*.html', 'app/**/*.json'])
	    .pipe(wiredep({
		ignorePath: '../bower_components/'
	    }))
        //.pipe(plugins.googleCdn(require('./bower.json')))
	    .pipe(gulp.dest('dist'))
	    .pipe(browserSync.stream());
    });

    gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	    .pipe(gulp.dest('dist/fonts'));
    });

    gulp.task('images', function() {
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
	    .pipe(gulp.dest('dist/images'));
    });

    // Start the web server and the browser
    gulp.task('browserSync', function() {
	browserSync.init({
	    server: ["dist", "bower_components"],
	    middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
	});
    });

    gulp.task('clean', function() {
	return del.sync('dist');
    });

    gulp.task('googlecdn', function () {
	return gulp.src('app/index.html')
            .pipe(plugins.googleCdn(require('./bower.json')))
            .pipe(gulp.dest('dist'));
    });

    // Watch Files For Changes
    gulp.task('watch', ['browserSync'], function() {
	gulp.watch('app/**/*.html', ['html']);
	gulp.watch(
	    ['app/**/*.js', 'test/**/*.js'],
	    ['lint', 'scripts']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
    });

    gulp.task('build', ['html', 'lint', 'sass', 'scripts']);

    // Default Task
    gulp.task('default', ['build', 'browserSync', 'watch']);


})();
