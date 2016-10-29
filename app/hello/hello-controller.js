(function () {
    'use strict';

    angular.module('application.hello')
	.controller('HelloController', ['$scope', 'CarstenService', HelloController]);

    function HelloController($scope, CarstenService) {
	var self = this;
	self.message= 'Hello ';
	self.changeMessage = function() {
            self.message = 'Goodbye';
	};
	$scope.items = [];
	CarstenService.getItems()
	    .then(function(data){
		console.log(data);
		$scope.items = data;
	    });
    }
    
})();
