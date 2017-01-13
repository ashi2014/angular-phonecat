describe('phoneList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phoneList'));

  // Test the controller
  describe('PhoneListController', function() {
  	var $httpBackend, ctrl;

  	beforeEach(inject(function($componentController, _$httpBackend_) {
  		ctrl = $componentController("phoneList");

  		$httpBackend = _$httpBackend_;
  		$httpBackend.expectGET("phones/phones.json")
  					.respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  	}));

    it('should create a `phones` model with 2 phones from $http', function() {
      expect(ctrl.phones).toBeUndefined();

      $httpBackend.flush();

      expect(ctrl.phones.length).toBe(2);
    });

    it('should set the default order to age', function() {
      expect(ctrl.orderBy).toBe("age");
    });

  });

});