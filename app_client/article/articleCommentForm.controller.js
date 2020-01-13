(function () {

    console.log("doing stuff")
    angular.module('hotplots')
        .controller('articleCommentForm', ['$scope', 'articles', 'user', function ($scope, articles, user) {
            var vm = this;

            console.log($scope.articleid)

            vm.commentFormSubmit = function () {

                articles.comment($scope.articleid,
                        $scope.userid,
                        $scope.name,
                        vm.comment)
                    .then(success => {
                        console.log(success);
                        // feedback, hide form/ refresh comments ? and go to new comment
                    }, 
                    reject => {
                        console.log(reject);
                    });
            }

        }]);

})();