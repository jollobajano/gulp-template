describe('SiteDescriptionService', function () {
    'use strict';

    describe('the service', function () {
        var service, httpBackend;

        beforeEach(module('application.service'));

        beforeEach(inject(function (_SiteDescriptorService_, $httpBackend) {
	    service = _SiteDescriptorService_;
	    httpBackend = $httpBackend;
        }));

        it('should be defined', function () {
	    expect(service).toBeTruthy();
        });

        it('should do something', function () {
	    var url = 'site.json';
	    httpBackend.whenGET(url).respond([
        {title: 'Danmark',
		 url: '/danmark',
		 templateUrl: '/danmark/danmark.html'},
        {title: 'Carsten',
		 url: '/',
		 templateUrl: '/hello/hello.html'},
        {title: 'Mamma',
		 url: '/mamma',
		 templateUrl: '/mamma/mamma.html'}
	    ]);
	    service.getItems().then(function (items) {
        expect(items).toBeTruthy();
        var item = items[0];
        expect(item.title).toBe('Danmark');
	    });
	    httpBackend.flush();
        });
    });
});
