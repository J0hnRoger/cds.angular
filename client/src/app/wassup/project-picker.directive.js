(function() {
  'use strict';

  angular
    .module('cds.wassup')
    .directive('projectPicker', projectPicker);

  function projectPicker ($timeout) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'AC'
    };
    return directive;

    function link(scope, element, attrs) {
      $timeout(function (){
        element.children(".row").css("height", 258 / 4);
      }, 0);
    }
  }
})();
