(function(){


    angular.module('application.service')
	.service('SiteDescriptorService',
		 ['$http','$q',
		  SiteDescriptorService]);
    
    function SiteDescriptorService($http, $q) {
	var items = [];
	var last_request_failed = true;
	var promise; // = undefined;
	
	return {
	    name: 'SiteDescriptorService',
	    
	    getItems: function() {
		if(!promise || last_request_failed) {
		    promise = $http.get('site.json').then(
			function(response) {
			    last_request_failed = false;
			    items = response.data;
			    return items;
			},function(response) {  // error
			    last_request_failed = true;
			    return $q.reject(response);
			});
		}
		return promise;
	    }  
	};	
    }    

})();
