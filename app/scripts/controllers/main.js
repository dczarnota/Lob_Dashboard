'use strict';

/**
 * @ngdoc function
 * @name lobDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lobDashboardApp
 */
angular.module('lobDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
