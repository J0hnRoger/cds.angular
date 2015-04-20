(function() {
  'use strict';

  angular
    .module('cds')
    .directive('collapsible', collapsible);

  /* @ngInject */
  function collapsible ($timeout) {

    var directive = {
      link: link,
      restrict: 'AC'
    };
    return directive;

    function link(scope, element, attrs) {
      $timeout(function (){
        element.collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
      }, 0);


    }
  }
})();
