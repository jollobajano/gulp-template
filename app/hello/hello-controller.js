(function(){
    //'use strict';
    
    angular.module('application.hello')
	.controller('HelloController', ['CarstenService', function(CarstenService) {
	    var self = this;
	    self.message= 'Hello ';
	    self.items = CarstenService.list();
	    self.time = CarstenService.time();
	    self.changeMessage = function() {
		self.message = 'Goodbye';
	    };
	}]);
})();
