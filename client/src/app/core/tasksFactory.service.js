(function() {
  'use strict';

  angular
    .module('cds')
    .factory('taskFactory', taskFactory);

  function taskFactory() {
    var service = {
      func: func
    };
    return service;

    ////////////////

    function func() {
    }
  }
})();
