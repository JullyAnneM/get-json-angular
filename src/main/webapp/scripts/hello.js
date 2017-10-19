/**
 * 
 */

angular.module('demo', [])
.controller('myController', function($scope, $http) {
   
	var request = {
            method: 'get',
            url: 'sample.json',
            dataType: 'json',
            contentType: "application/json"
        };

        $http(request)
            .success(function (jsonData) {
                $scope.produtos = jsonData.produtos.produtos;
            })
            .error(function () {

            });
	
});