describe('SiteDescriptionService', function() {
    'use strict';

    describe('the service', function() {
	
	var siteDescriptionService;
	
	beforeEach(function() {
	    module('application');
	    module('application.service');
	});

	beforeEach(inject(function(SiteDescriptionService) {
	    console.log('try to inject');
	    siteDescriptionService = SiteDescriptionService;        
	    console.log(siteDescriptionService);
	}));
	
	it('should be defined', function() {
	    expect(siteDescriptionService).toBeTruthy();
	});
	
    });
});
