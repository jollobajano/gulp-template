(function () {
    'use strict';

    angular.module('application.service')
	.factory('CarstenService', ['$q', '$http', CarstenService]);


    function CarstenService ($q, $http) {
	return {
            getItems: function () {
		return $http.get('carsten.json')
		    .then(function (response) {
			return response.data;
		    }, function (response) {  // error
			return $q.reject(response);
		    });
            }
	};
    }
    
})();
