describe('SiteDescriptionService', function() {
    'use strict';

    describe('the service', function() {
	
	var service;
	
	beforeEach(module('application.service'));

	beforeEach(inject(function(SiteDescriptionService) {
	    service = SiteDescriptionService;
	    console.log(service);
	}));
	
	it('should be defined', function() {
	    expect(service).toBeTruthy();
	});
	
    });
});
