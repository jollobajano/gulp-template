(function(){

    "use strict";

    describe("reddit api service", function () {
	var userService, httpBackend;

	beforeEach(module("application.user"));

	beforeEach(inject(function (_UserService_, $httpBackend) {
	    userService = _UserService_;
	    httpBackend = $httpBackend;
	}));

	it("should do something", function () {
	    httpBackend.whenGET("http://api.reddit.com/user/yoitsnate/submitted.json").respond({
		data: {
		    children: [
			{
			    data: {
				subreddit: "golang"
			    }
			},
			{
			    data: {
				subreddit: "javascript"
			    }
			},
			{
			    data: {
				subreddit: "golang"
			    }
			},
			{
			    data: {
				subreddit: "javascript"
			    }
			}
		    ]
		}
	    });
	    userService.getSubredditsSubmittedToBy("yoitsnate").then(function(subreddits) {
		expect(subreddits).toEqual(["golang", "javascript"]);
	    });
	    httpBackend.flush();
	});

    });
    
})();

