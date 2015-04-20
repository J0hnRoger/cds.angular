(function() {
    'use strict';

    angular
        .module('cds.wassup', [])
        .controller('WassupCtrl', WassupCtrl);

    function WassupCtrl($scope, $log, $mdBottomSheet) {

        var vm = this;
        vm.todos = [];
        vm.title = 'WassupCtrl';

        activate();

        function activate() {
          $mdBottomSheet.show({
            templateUrl: 'app/wassup/new-task-form.html',
            controller: 'BottomSheetCtrl',
            controllerAs : vm,
            locals : {  }
          }).then(function (step){

          });
        }

      vm.newTask = function(){
        $mdBottomSheet.show({
          templateUrl: 'app/wassup/new-task-form.html',
          controller: 'BottomSheetCtrl',
          controllerAs : vm,
          locals : {  }
        }).then(function (step){

        });
      }

    }
})();
