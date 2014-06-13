'use strict';

/**
 * @ngdoc overview
 * @name d8clientApp
 * @description
 * # d8clientApp
 *
 * Main module of the application.
 */
angular
  .module('d8clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    // Default to HAL+JSON.
    $httpProvider.defaults.headers.common.Accept = 'application/hal+json';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/nodes', {
        templateUrl: 'views/nodes.html',
        controller: 'NodesCtrl'
      })
      .when('/node/:nid', {
        templateUrl: 'views/node.html',
        controller: 'NodeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
