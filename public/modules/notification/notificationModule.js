
"use strict";

angular.module('pdata.system.notification', ['ui.router']).constant('colorCoding', {
    info: 'success',
    error: 'danger'
}).run(['$rootScope', 'notificationService', function($rootScope, notificationService) {
    $rootScope.$on('$locationChangeSuccess', function(evt, from, to) {
        if (from !== to) {
            notificationService.reset();
        }
    });
}]);
