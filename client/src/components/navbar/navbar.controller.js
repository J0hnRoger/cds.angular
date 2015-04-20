'use strict';

angular.module('cds')
  .controller('NavbarCtrl', function ($scope, $window, $route) {
    var vm = this;

    vm.isInvoices  = true;
    $scope.$on("$routeChangeSuccess", function (event, next, current){
      if ($window.location.hash == "#/invoices")
        $scope.vm.isInvoices = true;
      else
        $scope.vm.isInvoices = false;
    });
  });
