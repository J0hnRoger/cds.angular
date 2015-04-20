(function() {
    'use strict';

    angular
        .module('cds.invoices', [])
        .controller('InvoicesCtrl', InvoicesCtrl);

    function InvoicesCtrl() {
        var vm = this;
        vm.title = 'InvoicesCtrl';

        activate();

        function activate() {
        }
    }
})();
