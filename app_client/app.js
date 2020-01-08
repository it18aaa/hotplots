angular.module('hotplots', ['ngRoute']);

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .when('/article/read/:articleid', {
            templateUrl: '/article/read.view.html',
            controller: 'articleReadCtrl',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
        //$locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
}

angular
    .module('hotplots')
    .config(['$routeProvider', '$locationProvider', config]);

