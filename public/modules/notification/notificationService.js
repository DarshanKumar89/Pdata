"use strict";

angular.module('pdata.system.notification').service('notificationService', ['$timeout', 'lodash', 'colorCoding', function($timeout, _, colorCoding) {

    var notifications = [],
        service = {
            timeout: 2000,
            getAll: function() {
                return notifications;
            },
            reset: function() {
                notifications = [];
            },
            close: function(notification) {
                _.remove(notifications, notification);
            }
        };

    _.each(colorCoding, function(value, key) {
        service[key] = function(message, timeout) {
            var notification = message;
            if (_.isString(message)) {
                notification = {
                    message: message
                };
            }

            notification.message = notification.msg || notification.message;
            delete notification.msg;
            notification.type = value;
            notification.timeout = _.isUndefined(timeout) ? (_.isUndefined(notification.timeout) ? true : notification.timeout) : timeout;
            notifications.push(notification);

            if (notification.timeout) {
                $timeout(function() {
                    service.close(notification);
                }, angular.isNumber(notification.timeout) ? notification.timeout : service.timeout);
            }
        };
    });

    return service;
}]);
