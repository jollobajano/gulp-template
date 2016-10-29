(function(){
    "use strict";

    angular.module('application', ['application.nav', 'application.hello', 'application.service', 'ngRoute']);

    angular.module('application')
        .config(['$locationProvider', '$routeProvider', 'NavigationServiceProvider',
                 function config($locationProvider, $routeProvider, NavigationServiceProvider) {

		     var items = NavigationServiceProvider.list();
		     
                     angular.forEach (items, function(item) {
                         $routeProvider.when(item.url, {
                             templateUrl: item.templateUrl
                         });
                     });
		     
                     $routeProvider.otherwise({
                         redirectTo: NavigationServiceProvider.otherwise()
                     });
                     
                     //$locationProvider.hashPrefix('!');
                     //$locationProvider.html5Mode(false);
                     
                 }]);


})();
