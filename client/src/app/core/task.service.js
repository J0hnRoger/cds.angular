(function() {
    'use strict';

    angular
        .module('cds')
        .factory('Task', _task);

    function _task($firebaseArray) {
        function Task (snap){
          this.Title = "";

          this.update = function(snap) {
            return true;
          }

          this.toJSON = function() {
            // tell AngularFire what data to save, in this case a string
            return this.message;
          }
        };
        return Task;
    }
})();
