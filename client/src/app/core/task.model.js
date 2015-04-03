(function() {
  'use strict';

  angular
    .module('cds')
    .factory('Task', Task);

  function Task(FireBaseRoot, TaskFactory) {
    var ref = new Firebase(FireBaseRoot+ '/test/');
    var TasksNode = "tasks";
    //init

    return function (date){
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var repo = ref.child(year).child(month).child(day).child(TasksNode);

      return new TaskFactory(repo);
    };

    ////////////////
  }
})();
