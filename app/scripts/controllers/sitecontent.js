'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:SitecontentCtrl
 * @description
 * # SitecontentCtrl
 * Controller of the d8clientApp
 */
angular.module('d8clientApp')
  .controller('SitecontentCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

    $http.get('http://d8server.local/sitecontent.json').then(function(response) {
      var data = response.data;
      console.log('NodeCtrl GET data', data);
      $scope.data = data;
//      $scope.type = data.type[0].target_id;
//      $scope.title = data.title[0].value;
//      $scope.body = data.body[0].value;
      console.log('NodeCtrl GET $scope', $scope);
    });
  }]);