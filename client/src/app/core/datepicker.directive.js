(function() {
  'use strict';

  angular
    .module('cds')
    .directive('datepicker', datepicker);

  /* @ngInject */
  function datepicker () {

    var directive = {
      link: link,
      restrict: 'AC'
    };
    return directive;

    function link(scope, element, attrs) {
      element.pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        // Strings and translations
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        onStart: function ()
        {
          this.set( 'select', new Date());
        }
      });

    }
  }
})();
