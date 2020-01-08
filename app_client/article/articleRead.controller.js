(function () {

    angular.module('hotplots')
        .controller('articleReadCtrl', ['$scope', 'articles', '$routeParams', articleReadCtrl]);

    function articleReadCtrl($scope, articles, $routeParams) {
        var vm = this;

        articles.read($routeParams.articleid)
            .then(
                (result) => {                    
                    vm.article = result.data;
                },
                (error) => {
                    console.log(error);
                });
    }
})();