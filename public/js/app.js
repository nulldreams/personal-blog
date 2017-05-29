var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl: 'views/post.html',
            controller: 'PostCtrl',
        })

        .otherwise({ redirectTo: '/' });
});

app.controller('PostCtrl', function ($rootScope, $location, $http, $scope, $window) {

});