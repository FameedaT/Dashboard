'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        url: '/dashboard'
      })
      .state('organizations', {
        templateUrl: 'views/organizations.html',
        controller: 'OrganizationsCtrl',
        url: '/organizations'
      })
      .state('organizations.list', {
        templateUrl: 'views/organizations.list.html',
        controller: 'OrganizationsListCtrl',
        url: '/list'
      })
      .state('organizations.view', {
        templateUrl: 'views/organizations.view.html',
        controller: 'OrganizationsViewCtrl',
        url: '/view'
      })
      .state('organizations.edit', {
        templateUrl: 'views/organizations.edit.html',
        controller: 'OrganizationsEditCtrl',
        url: '/edit/:orgId'
      })
      .state('projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        url: '/projects'
      })
      .state('projects.list', {
        templateUrl: 'views/projects.list.html',
        controller: 'ProjectsListCtrl',
        url: '/list'
      })
      .state('projects.view', {
        templateUrl: 'views/projects.view.html',
        controller: 'ProjectsViewCtrl',
        url: '/view'
      })
      .state('employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeesCtrl',
        url: '/employees'
      });
  })

  .run(function ($state) {
    $state.go('dashboard');
  });
