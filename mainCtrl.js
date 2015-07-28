var myApp = angular.module('RiApp');

app.controller ('mainCtrl', function ($scope, $rootScope, $location, $timeout) {
	$scope.home = function () {
		$location.path('/home');
	}
	$scope.about = function () {
		$location.path('/about');
	}
	$timeout(function () { twttr.widgets.load(); }, 500); 
})