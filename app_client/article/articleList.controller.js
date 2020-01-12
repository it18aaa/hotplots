(function () {

    angular.module('hotplots')
        .controller('articleListCtrl', ['$scope', 'articles', '$routeParams', articleListCtrl]);

    function articleListCtrl($scope, articles, $routeParams) {
        var vm = this;

        articles.getList($routeParams.sort)
            .then(
                (result) => {
                    vm.articles = result.data;
                },
                (error) => {
                    console.log(error);
                });
    }
})();