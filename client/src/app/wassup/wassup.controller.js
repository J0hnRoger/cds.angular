(function() {
    'use strict';

    angular
        .module('cds.wassup', [])
        .controller('WassupCtrl', WassupCtrl);

    function WassupCtrl($scope, Task) {

        var vm = this;
        vm.todos = [];
        vm.title = 'WassupCtrl';

        activate();

        function activate() {
        }
    }
})();
