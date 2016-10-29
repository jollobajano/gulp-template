describe('NavigationController', function () {
    'use strict';

    beforeEach(module('application.nav'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
	// The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('NavigationController', function () {
        it('exists', function () {
	    var $scope = {};
	    var controller = $controller('NavigationController', { $scope: $scope });
	    expect(controller).toBeDefined();
	    expect(controller.menuItems.length).toEqual(3);
        });
    });
});
