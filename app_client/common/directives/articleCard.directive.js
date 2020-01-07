angular
    .module('hotplots')
    .directive('articleCard', function () {
        return {
            restrict: 'AE',
            scope: {
                article: '='
            },
            templateUrl: '/common/partials/articleCard.partial.html'
        };
    });