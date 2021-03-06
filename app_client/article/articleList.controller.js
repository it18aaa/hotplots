(function () {

    angular.module('hotplots')
        .controller('articleListCtrl', ['$scope', 'articles', 'user', '$routeParams', articleListCtrl]);

    function articleListCtrl($scope, articles, user, $routeParams) {
        var vm = this;
        vm.title = "Articles";
        vm.userid = user.getInfo();
        sortorder = 'newest';

        refreshList();

        vm.order = function (input) {
            sortorder = input;
            refreshList();
        };

        function refreshList() {
            articles.getList(sortorder)
                .then(
                    (result) => {
                        vm.articles = result.data;
                    },
                    (error) => {
                        console.log(error);
                    });
        }
    }
})();