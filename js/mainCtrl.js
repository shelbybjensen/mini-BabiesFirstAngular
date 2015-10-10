var app = angular.module("friendsList");

app.controller('mainCtrl', function($scope){
	$scope.name = "Shelby";
	$scope.friends = ['Whitney', 'Jenni' , 'Jessie', 'Brittany', 
		'Olivia', 'Sky', 'Autumn'];

});