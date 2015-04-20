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
        templateUrl: 'app/task-bumper/task-bumper.html',
        controller: 'InvoicesCtrl',
        controllerAs : 'vm'
      })
      .otherwise({
        redirectTo : '/'
      })
  });
