(function () {

    angular.module('hotplots')
        .controller('articleReadCtrl', ['$scope', 'articles', '$routeParams', 'user', articleReadCtrl]);

    function articleReadCtrl($scope, articles, $routeParams, user) {
        var vm = this;
        vm.commentFormShow = false;
        vm.user = user.getInfo();

        articles.read($routeParams.articleid)
            .then(
                (result) => {
                    vm.article = result.data;
                },
                (error) => {
                    console.log(error);
                });

                
        vm.commentFormToggle = function () {
            vm.commentFormShow = !vm.commentFormShow;

        }
    }
})();