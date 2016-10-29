(function(){
    'use strict';



    angular.module('application.user')
	.controller('UserController', ['$scope', 'UserService', UserController]);


    function UserController($scope, UserService) {
	UserService.getSubredditsSubmittedToBy("yoitsnate").then(function(subreddits) {
	    $scope.subreddits = subreddits;
	});
    }

})();
