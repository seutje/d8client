'use strict';

describe('Controller: SitecontentCtrl', function () {

  // load the controller's module
  beforeEach(module('d8clientApp'));

  var SitecontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SitecontentCtrl = $controller('SitecontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
