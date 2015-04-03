(function() {
  'use strict';

  angular
    .module('cds')
    .factory('TaskFactory', TaskFactory );

  function TaskFactory($firebaseObject) {


    var service = $firebaseObject;

    return service;

    //////////////////////////////
    function getMeTaskNow(date){

    }
  }
})();

