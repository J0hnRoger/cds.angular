(function() {
  'use strict';

  angular
    .module('cds')
    .factory('TasksFactory', TasksFactory );

  function TasksFactory($firebaseArray, Task) {

    var service = $firebaseArray.$extend({
      // override the $createObject behavior to return a Message object
      $$added: function(snap) {
        return new Task(snap);
      },

      // override the $$updated behavior to call a method on the Message
      $$updated: function(snap) {
        var task = this.$getRecord(snap.key());
        return task.update(snap);
      },

      // our messages store the unique id in a special location, so tell $firebaseArray
      // how to find the id for each record
      $$getKey: function(rec) {
        return rec.ID;
      }
    });

    return service;

    //////////////////////////////
  }
})();

