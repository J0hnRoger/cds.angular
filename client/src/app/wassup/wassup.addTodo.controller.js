(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .controller('addTodoCtrl', addTodoCtrl);

    function addTodoCtrl($scope, $mdBottomSheet) {
        $scope.todo = {
        	pomodoros : 0
        };

        activate();

        function activate() {
        }

        $scope.saveTodo = function(){
    		$mdBottomSheet.hide($scope.todo);
        }
    }
})();