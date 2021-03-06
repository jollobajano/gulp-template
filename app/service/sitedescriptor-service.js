(function () {
    angular.module('application.service')
	.service('SiteDescriptorService',
		 ['$http', '$q', function ($http, $q) {
		     var lastRequestFailed = true;
		     var promise;
		     var items = [];

		     return {
			 name: 'SiteDescriptorService',

			 getItems: function () {
			     if (!promise || lastRequestFailed) {
				 promise = $http.get('site.json').then(
				     function (response) {
					 lastRequestFailed = false;
					 items = response.data;
					 return items;
				     }, function (response) {  // error
					 lastRequestFailed = true;
					 return $q.reject(response);
				     });
			     }
			     return promise;
			 }
		     };
		 }]
		);
})();
