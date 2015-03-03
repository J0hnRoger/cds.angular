(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .controller('WassupCtrl', WassupCtrl);

    function WassupCtrl($mdBottomSheet) {

        var vm = this;
        vm.todos = [];
        vm.title = 'WassupCtrl';

        activate();
       

        function activate() {
        	 
        }

        vm.showListBottomSheet = function($event) {
           $mdBottomSheet.show({
              templateUrl: 'app/wassup/wassup.addTodo.html',
              controller: 'addTodoCtrl'
            }).then(function (todo){
                vm.todos.push(todo);
           });
        };    
    }
})();