angular
    .module('hotplots')
    .directive('articleComment', function () {
        return {
            restrict: 'AE',
            scope: {
                comment: '='
            },
            templateUrl: '/common/partials/articleComment.partial.html'
        };
    });