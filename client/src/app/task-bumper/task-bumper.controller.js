(function() {
    'use strict';

    angular
        .module('cds.taskBumper')
        .controller('TaskBumperCtrl', taskBumperCtrl);

    /* @ngInject */
    function taskBumperCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'task-bumper';

        activate();

        function activate() {
        }
    }
})();