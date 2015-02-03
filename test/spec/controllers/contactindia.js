'use strict';

describe('Controller: ContactindiaCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ContactindiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactindiaCtrl = $controller('ContactindiaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
