describe("PhoneListController", function() {

	beforeEach(module("phoneCatApp"));

	it("should create a list with 3 phones", inject(function($controller) {
		var scope = {};
		var ctrl = $controller("PhoneListController", {$scope: scope});

		expect(scope.phones.length).toBe(3);
	}));
});