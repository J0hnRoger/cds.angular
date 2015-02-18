(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .controller('WassupCtrl', WassupCtrl);

    function WassupCtrl() {

        var vm = this;
        vm.title = 'WassupCtrl';

        activate();

        function activate() {
        	
        }
    }
})();