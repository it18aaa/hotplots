angular.module('hotplots', ['ngRoute']);

function config ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});
}

angular
    .module('hotplots')
    .config(['$routeProvider', config]);

