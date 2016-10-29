(function(){

    angular.module("application.user")
	.service("UserService",
		 ['$http', function($http) {
		     return {
			 getSubredditsSubmittedToBy: function(user) {
			     return $http.get("http://api.reddit.com/user/" + user + "/submitted.json").then(function(response) {
				 var posts, subreddits;
				 
				 posts = response.data.data.children;
				 
				 // transform data to be only subreddit strings
				 subreddits = posts.map(function(post) {
				     return post.data.subreddit;
				 });
				 
				 // de-dupe
				 subreddits = subreddits.filter(function(element, position) {
				     return subreddits.indexOf(element) === position;
				 });
				 
				 return subreddits;
			     });
			 }
		     };
		 }]
		);
    
})();
