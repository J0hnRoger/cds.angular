(function() {
    'use strict';

    angular
        .module('cds.wassup')
        .directive('verticalSlide', verticalSlide);

    function verticalSlide ($timeout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          attrs.activity = false;
          scope.verticalSwap = function (){
            var margin;
            if (!attrs.activity)
              margin = "-90vh";
            else
              margin = "-35vh";
            element.animate({
              "margin-top" : margin
            }, "fast");
            attrs.activity = !attrs.activity;
          }
        }
    }
})();
