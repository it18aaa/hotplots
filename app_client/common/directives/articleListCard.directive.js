angular
    .module('hotplots')
    .directive('articleListCard', function () {
        return {
            restrict: 'AE',
            scope: {
                article: '='
            },
            templateUrl: '/common/partials/articleListCard.partial.html'
        };
    });