module.exports = function (config) {
    'use strict';

    config.set({
        autoWatch: true,
        basePath: '.',
        frameworks: ['wiredep', 'jasmine'],

        plugins: [
	    'karma-wiredep',
	    'karma-phantomjs-launcher',
	    'karma-jasmine'
        ],

        wiredep: {
            dependencies: true,    // default: true
            devDependencies: true // default: false
        },

        files: [
	    'app/**/*-module.js',
	    'app/**/*.js',
	    'app/application.js'
        ],

        port: 8080,

	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera
	// - Safari (only Mac)
	// - PhantomJS
	// - IE (only Windows)
        browsers: [
	    'PhantomJS'
        ],

        singleRun: false,

        colors: true,

	// level of logging
	// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO

	// Uncomment the following lines if you are using grunt's server to run the tests
	// proxies: {
	//   '/': 'http://localhost:9000/'
	// },
	// URL root prevent conflicts with the site root
	// urlRoot: '_karma_'
    });
};
