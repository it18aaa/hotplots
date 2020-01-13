angular
    .module('hotplots')
    .directive('commentForm', function () {
        return {
            restrict: 'AE',
            scope: {
                articleid: '=',
                userid: '=',
                name: '='
            },
            controller: 'articleCommentForm',
            controllerAs: 'vm',
            templateUrl: '/common/partials/commentForm.partial.html',
            link: function(scope) {
                console.log(scope)
            }
        };
    });