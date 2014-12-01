/* 
app.js

By Victoria Wellington
To be used with the merging data challenge files
To practice and demonstrate elementary understanding of Angular
*/

"use strict";
var addressBook = angular.module('AddressBook', []);

addressBook.controller('AddressController', ['$scope', function($scope){
	$scope.employees = pawneeEmployees;
	$scope.order = 'lastName';
	$scope.sort = function(col){
		if (col == $scope.order){
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.order = col;
			$scope.reverse = false;
		}	
	};


}]);