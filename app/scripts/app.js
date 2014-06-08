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
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.headers.common.Accept = 'application/hal+json';
//    $httpProvider.defaults.headers.common.Accept = 'application/json';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sitecontent', {
        templateUrl: 'views/sitecontent.html',
        controller: 'SitecontentCtrl'
      })
      .when('/node/:nid', {
        templateUrl: 'views/node.html',
        controller: 'NodeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
