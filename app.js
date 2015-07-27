var app = angular.module('RiApp', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider.
		when('/home', {
			templateUrl: 'home.html',
			controller: 'mainCtrl'
		}).
		when('/about', {
			templateUrl: 'about.html',
			controller: 'mainCtrl'
		}).
		 otherwise({
                redirectTo: '/home'
            });
})

