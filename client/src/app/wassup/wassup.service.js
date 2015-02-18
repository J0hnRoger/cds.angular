(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .factory('wassupService', wassupService);

    function wassupService($q, $http, fakeService) {
        
        var service = {
            getAllTmaListItems: getAllTmaListItems
        };
        return service;

        ////////////////

        function getAllTmaListItems() {
        	var deferred = $.Deferred();
	        
	        $http.get('http://localhost:3002/Suivi_TMA.json').then(function(response){
                deferred.resolve(response.data);
	        });

	        return deferred;
        }
    }
})();