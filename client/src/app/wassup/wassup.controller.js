(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .controller('WassupCtrl', WassupCtrl);

    function WassupCtrl(wassupService) {

        var vm = this;
        vm.title = 'WassupCtrl';

        activate();

        function activate() {
        	wassupService.getAllTmaListItems().then(function (data){
        		vm.items = data.d.results;
        	});
        }
    }
})();