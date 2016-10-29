describe('HelloController', function () {
    'use strict';

    beforeEach(module('application.hello'));

    var $controller;
    var httpBackend;

    beforeEach(inject(function (_$controller_, $httpBackend) {
        $controller = _$controller_;
	httpBackend = $httpBackend;
    }));
    
    describe('HelloController', function () {

        it('changes the message', function () {
	    var $scope = {};
	    var controller = $controller('HelloController', { $scope: $scope });
	    expect(controller.message).toEqual('Hello ');
	    controller.changeMessage();
	    expect(controller.message).toEqual('Goodbye');
        });

        it('should have items', function () {
	    var $scope = {};
	    httpBackend.whenGET('carsten.json')
		.respond([{"name": "Carsten", "text": "Hjälten!"}]);
	    var controller = $controller('HelloController', { $scope: $scope });
	    console.log(controller);
	    httpBackend.flush();
	    expect($scope.items.length).toEqual(1);
        });

    });
});
