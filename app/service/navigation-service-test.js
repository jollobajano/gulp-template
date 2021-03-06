describe('NavigationService', function () {
    'use strict';

    beforeEach(module('application.service'));

    describe('the service', function () {
        it('exists and is injectable', inject(function (_NavigationService_) {
	    console.log(_NavigationService_);
	    expect(_NavigationService_).toBeDefined();
        }));
        it('conatins menuItems', inject(function (_NavigationService_) {
	    var items = _NavigationService_.list();
	    console.log(items);
	    expect(items.length).toBe(3);
        }));
    });
});
