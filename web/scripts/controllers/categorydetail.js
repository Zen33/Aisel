'use strict';

angular.module('aiselApp')
    .controller('CategoryDetailCtrl', ['$location','$scope','$routeParams','categoryService',function ($location, $scope, $routeParams, categoryService) {

        // Category Information
        var categoryId = $routeParams.categoryId;
        categoryService.getCategory(categoryId).success(
            function(data, status) {
                $scope.categoryDetails = data;
            }
        );

    }]);