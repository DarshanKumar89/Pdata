"use strict";

angular.module('pdata.navigation').factory('navigationResource', ['$resource', 'atlasConfig', function($resource, atlasConfig) {
    return $resource(atlasConfig.API_ENDPOINTS.TRAITS_LIST, {}, {
        get: {
            'method': 'GET',
            'responseType': 'json',
            'isArray': true,
            'cache': true,
            'transformResponse': function(data) {
                var results = [];
                angular.forEach(data && data.results, function(val) {
                    results.push(val);
                });
                return results;
            }
        }
    });
}]);
