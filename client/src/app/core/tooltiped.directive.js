(function() {
  'use strict';

  angular
    .module('cds')
    .directive('tooltipped', tooltipped);

  /* @ngInject */
  function tooltipped ($timeout) {

    var directive = {
      link: link,
      restrict: 'AC'
    };
    return directive;

    function link(scope, element, attrs) {
      var delay = attrs.delay == undefined ? 50 : attrs.delay;
      $timeout(function (){
        element.tooltip();
      }, 0);


    }
  }
})();
