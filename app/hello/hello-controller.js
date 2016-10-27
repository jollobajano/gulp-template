(function(){
    //'use strict';
    
    angular.module('application.hello')
	.controller('HelloController', ['CarstenService', function(CarstenService) {
	    var self = this;
	    self.message= 'Hello ';
	    self.items = CarstenService.list();
	    self.changeMessage = function() {
		self.message = 'Goodbye';
	    };
	}]);
})();
