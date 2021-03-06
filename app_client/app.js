angular.module('hotplots', ['ngRoute', 'ngSanitize']);

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
        .when('/article/tag/:tagid/', {
            templateUrl: '/article/list.view.html',
            controller:  'articleListByTagCtrl',
            controllerAs: 'vm'
        })
        .when('/article/list/:sort', {
            templateUrl: '/article/list.view.html',
            controller:  'articleListCtrl',
            controllerAs: 'vm'
        })
        .when('/article/create', {
            templateUrl: '/article/create.view.html',
            controller: 'articleCreateCtrl',
            controllerAs: 'vm'
        })
        .when('/article/update/:articleid', { 
            templateUrl: '/article/create.view.html',
            controller: 'articleUpdateCtrl',
            controllerAs: 'vm'
        })
        .when('/tag/list', {
            templateUrl: '/tags/list.view.html',
            controller: 'tagListCtrl',
            controllerAs: 'vm'
        })
        .when('/register', {
            templateUrl: '/user/register.view.html', 
            controller: 'registerCtrl',
            controllerAs: 'vm'
        })
        .when('/policy', {
            templateUrl: '/static/policy.html'
        })
        .when('/login', {
            templateUrl: '/user/login.view.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })
        .when('/logout', {
            templateUrl: '/user/logout.view.html',
            controller: 'logoutCtrl',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
       
        $locationProvider.html5Mode(true);
}

angular
    .module('hotplots')
    .config(['$routeProvider', '$locationProvider', config]);

