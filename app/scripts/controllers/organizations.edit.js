'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsEditCtrl
 * @description
 * # OrganizationsEditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsEditCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
