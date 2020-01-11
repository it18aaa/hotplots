angular
    .module('hotplots')
    .directive('navbar', ['user', function () {
        return {
            restrict: 'AE',
            scope: {
                article: '='                
            },
            templateUrl: '/common/partials/navbar.partial.html'
        };
    }]);