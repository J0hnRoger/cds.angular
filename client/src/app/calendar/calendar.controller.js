(function() {
    'use strict';

    angular
        .module('cds.calendar')
        .controller('CalendarCtrl', CalendarCtrl);

    function CalendarCtrl() {
        var vm = this;
        vm.title = 'CalendarCtrl';

        activate();

        function activate() {
        }
    }
})();