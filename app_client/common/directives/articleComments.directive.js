angular
    .module('hotplots')
    .directive('articleComments', function () {
        return {
            restrict: 'AE',
            // scope: {
            //     comment: '='
            // },
            templateUrl: '/common/partials/articleComments.partial.html'
        }

    });