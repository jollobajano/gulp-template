(function () {
    'use strict';
    
    function NavigationService (menuItems, fallBack) {
        this.list = function () {
	    return menuItems;
        };
	
        this.otherwise = function () {
	    return fallBack;
        };
    }
    
    angular.module('application.service')
	.provider('NavigationService', function () {
	    var menuItems = [
		{title: 'Danmark',
		 url: '/danmark',
		 templateUrl: '/danmark/danmark.html'},
		{title: 'Carsten',
		 url: '/',
		 templateUrl: '/hello/hello.html'},
		{title: 'Mamma',
		 url: '/mamma',
		 templateUrl: '/mamma/mamma.html'}
	    ];

	    var fallBack = '/';

	    this.list = function () {
		return menuItems;
	    };

	    this.otherwise = function () {
		return fallBack;
	    };

	    this.$get = function () {
		return new NavigationService(menuItems, fallBack);
	    };
	});
})();
