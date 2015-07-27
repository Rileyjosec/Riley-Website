var myApp = angular.module('RiApp');

app.controller ('mainCtrl', function ($scope, $rootScope, $location) {
	$scope.home = function () {
		$location.path('/home');
	}
	$scope.about = function () {
		$location.path('/about');
	}
})