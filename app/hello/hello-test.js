describe('HelloController', function () {
    'use strict';

    beforeEach(module('application.hello'));
    beforeEach(module('application.service'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
	// The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('HelloController', function () {
        it('changes the message', function () {
	    var $scope = {};
	    var controller = $controller('HelloController', { $scope: $scope });
	    expect(controller.message).toEqual('Hello ');
        });
        it('should have items', function () {
	    var $scope = {};
	    var controller = $controller('HelloController', { $scope: $scope });
	    expect(controller.items.length).toEqual(4);
        });
    });
});
