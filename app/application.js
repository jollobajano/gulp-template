(function(){
    "use strict";

    angular.module('application', ['application.nav', 'application.hello', 'application.service', 'ngRoute']);

    angular.module('application')
        .config(['$locationProvider', '$routeProvider', 'NavigationServiceProvider',
                 function config($locationProvider, $routeProvider, NavigationServiceProvider) {

		     var items = NavigationServiceProvider.list();
		     
                     for (var item in items) {

                         $routeProvider.when(items[item].url, {
                             templateUrl: items[item].templateUrl
                         });
                     }
                     $routeProvider.otherwise({
                         redirectTo: NavigationServiceProvider.otherwise()
                     });
                     
                     //$locationProvider.hashPrefix('!');
                     //$locationProvider.html5Mode(false);
                     
                 }]);


})();
