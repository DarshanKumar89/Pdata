
"use strict";

angular.module('pdata.system.notification').controller('notificationController', ['$scope', 'notificationService',
    function($scope, notificationService) {

        $scope.getNotifications = notificationService.getAll;

        $scope.close = function(notification) {
            notificationService.close(notification);
        };
    }
]);
