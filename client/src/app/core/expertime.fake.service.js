(function() {
    'use strict';

    angular
        .module('expertime')
        .factory('fakeService', fakeService);

    function fakeService() {
        var service = {
            getJsonResponse: getJsonResponse
        };
        return service;

        ////////////////

        function getJsonResponse(jsonFileName) {
        	
        }
    }
})();