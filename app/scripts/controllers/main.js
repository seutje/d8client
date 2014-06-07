'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d8clientApp
 */
angular.module('d8clientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
