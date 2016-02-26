
"use strict";

angular.module('pdata.navigation').controller('navigationController', ['$scope', 'navigationResource', '$cacheFactory', 'atlasConfig',
    function($scope, navigationResource, $cacheFactory, atlasConfig) {

        $scope.updateVar = function(event) {
            $scope.$$prevSibling.query = angular.element(event.target).text();

        };

        $scope.$on('load_Traits', function() {
            $scope.leftnav = navigationResource.get();
        });

        setTimeout(function() {
            var httpDefaultCache = $cacheFactory.get('$http');
            httpDefaultCache.remove(atlasConfig.API_ENDPOINTS.TRAITS_LIST);
        }, 3600000);

        $scope.refreshTags = function() {
            var httpDefaultCache = $cacheFactory.get('$http');
            httpDefaultCache.remove(atlasConfig.API_ENDPOINTS.TRAITS_LIST);
            $scope.leftnav = navigationResource.get();
        };

    }
]);
