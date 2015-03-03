'use strict';

angular.module('cds', 
  [
     /*External Components*/
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngRoute',
    'ngMaterial',
    /*Angular Components*/
     'cds.wassup'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs : 'vm'
      })
      .when('/wassup', {
        templateUrl: 'app/wassup/wassup.html',
        controller: 'WassupCtrl',
        controllerAs : 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;

