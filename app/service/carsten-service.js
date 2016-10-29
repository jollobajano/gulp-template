(function(){
    'use strict';
    
    angular.module('application.service')
	.factory('CarstenService', [function() {
	    var items = [
		{name: 'Carsten',
		 text: 'Min lille bror.'},
		{name: 'Carsten',
		 text: 'Du är så duktig -- imponerande.'},
		{name: 'Carsten',
		 text: 'Min saknade bror.'},
		{name: 'Carsten',
		 text: 'Min skyddsängel.'},
	    ];
	    return {
		list: function() {
		    return items;
		},
		time: function() {
		    return new Date();
		}
	    };
	}]);

})();
