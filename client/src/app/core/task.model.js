(function() {
  'use strict';

  angular
    .module('cds')
    .factory('Task', _task);

  function _task(FireBaseRoot, $firebaseArray) {
    var ref = new Firebase(FireBaseRoot+ '/test/');
    var TasksNode = "tasks";

    function Task(snap){
        this.ID = snap.key();
        this.StartDate = new Date(snap.val().startDate);
        this.Year = this.StartDate.getFullYear();
        this.Month = this.StartDate.getMonth() + 1;
        this.Day = this.StartDate.getDate();
    }

    //////////////////////////////////

    Task.prototype = {
      update: function(snap) {
        if( snap.val() !== this.message ) {
          this.startdate = snap.val();
          return true;
        }
        return false;
      },
      toJSON: function() {
        // tell AngularFire what data to save, in this case a string
        return this.startdate;
      }
    };
    return Task;
  }
})();
