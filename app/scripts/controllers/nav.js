'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the d8clientApp
 */

angular.module('d8clientApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.links = [
      {href: '#/', label: 'Home'},
      {href: '#/about', label: 'About'},
      {href: '#/nodes', label: 'Nodes'}
    ];
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'home';
      return page.toLowerCase() === currentRoute ? 'active' : '';
    };
}]);
