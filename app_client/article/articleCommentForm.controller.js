(function () {

    console.log("doing stuff")
    angular.module('hotplots')
        .controller('articleCommentForm', ['$scope', 'articles', 'user', function ($scope, articles, user) {
            var vm = this;
            console.log('inside articleCommentForm controller');

        }]);

})();