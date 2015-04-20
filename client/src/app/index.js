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
    'firebase',
    /*Angular Components*/
     'cds.invoices',
     'cds.taskBumper',
     'cds.calendar',
     'cds.wassup'
  ])
  .constant('FireBaseRoot', 'https://dazzling-inferno-3649.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/wassup/wassup.html',
        controller: 'WassupCtrl',
        controllerAs : 'vm'
      })
      .when('/task-bumper', {
        templateUrl: 'app/task-bumper/task-bumper.html',
        controller: 'TaskBumperCtrl',
        controllerAs : 'vm'
      })
      .when('/calendar', {
        templateUrl: 'app/calendar/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs : 'vm'
      })
      .when('/invoices', {
        templateUrl: 'app/invoices/invoices.html',
        controller: 'InvoicesCtrl',
        controllerAs : 'vm'
      })
      .when('/test', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo : '/'
      })
  });
