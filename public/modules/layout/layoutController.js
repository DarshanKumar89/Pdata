"use strict";

angular.module('pdata.layout').controller('layoutController', ['$scope', function($scope) {

    $scope.menu = [{
        title: "Tags",
        state: "tags"
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = function() {
        return true;
    };

}]);
