(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .controller('WassupCtrl', WassupCtrl);

    function WassupCtrl($scope, Task) {

        var vm = this;
        vm.todos = [];
        vm.title = 'WassupCtrl';

        activate();

        function activate() {
          var task = new Task(new Date());
          task.Title = "T38 - Sercel correction";
          task.Duration = 7200;
          task.$save().then(function (ref){
            console.log(ref);
          })
        }
    }
})();
