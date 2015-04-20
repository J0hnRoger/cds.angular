(function() {
  'use strict';

  angular
    .module('cds')
    .factory('Project', _project);

  function _project(FireBaseRoot, $firebaseArray) {

    function Project(snap){
      this.ID = snap.key();
      this.Color = snap.val().color;
      this.Title = snap.val().title;
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
