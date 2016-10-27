/**
 * @ngdoc function
 * @name application.nav.NavigationController
 * @description
 * # NavigationController
 */
(function(){

    angular.module('application.nav')
	.controller('NavigationController',
		    ['$location', 'NavigationService',
		     function($location, NavigationService){

			 this.menuItems = NavigationService.list();
			 
			 this.condActiveClass = function(path){
			     return ($location.path().endsWith(path)) ? 'active' : '';
			 };
			 
	}]);

})();
