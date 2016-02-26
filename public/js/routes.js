"use strict";

//Setting up route
angular.module('pdata').config(['$locationProvider', '$urlRouterProvider',
    function($locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');
        // For unmatched routes:
        $urlRouterProvider.otherwise('/home');
    }
]);
