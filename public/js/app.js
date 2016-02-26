
"use strict";

angular.module('pdata', ['ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'pdata.system',
    'pdata.home',
    'pdata.layout',
    'pdata.navigation',
 ]);

angular.module('pdata.system', ['pdata.system.notification']);

angular.module('pdata').factory('lodash', ['$window',
    function($window) {
        return $window._;
    }
]).factory('global', ['$window', '$location',
    function($window, $location) {
        return {
            user: $location.search()['user.name'],
            authenticated: !!$window.user,
            renderErrors: $window.renderErrors
        };
    }
]).factory('httpInterceptor', ['global', function(global) {
    return {
        'request': function(config) {
            if (config.url && (config.url.indexOf(baseUrl) === 0 || config.url.indexOf(baseUrl) === 0)) {
                config.params = config.params || {};
                config.params['user.name'] = global.user;
            }
            return config;
        }
    };
}]).config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]).run(['$rootScope', 'global', 'notificationService', 'lodash', function($rootScope, global, notificationService, lodash) {
    var errors = global.renderErrors;
    if (angular.isArray(errors) || angular.isObject(errors)) {
        lodash.forEach(errors, function(err) {
            err = angular.isObject(err) ? err : {
                message: err
            };
            err.timeout = false;
            notificationService.error(err);
        });
    } else {
        if (errors) {
            errors.timeout = false;
            notificationService.error(errors);
        }
    }

}]);
