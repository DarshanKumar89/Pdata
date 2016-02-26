
"use strict";

angular.module('pdata.home').controller('headerController', ['$scope', '$modal', function($scope, $modal) {

    $scope.menu = [{
        title: "Tags",
        state: "tags"
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = function() {
        return true;
    };

}]);
