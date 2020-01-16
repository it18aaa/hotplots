(function () {

    angular.module('hotplots')
        .controller('articleListByTagCtrl', ['$scope', 'articles', 'tagging', '$routeParams', articleListByTagCtrl]);

    function articleListByTagCtrl($scope, articles, tagging, $routeParams) {
        var vm = this;
        vm.title = "Articles";

        tagging.listArticlesById($routeParams.tagid)
            .then(
                (result) => {
                    vm.articles = result.data.articles;
                    vm.tagname = result.data.name;
                    vm.article_count = result.data.article_count;
                    vm.subtitle = vm.article_count; 
                    
                    if(vm.article_count == 1) {
                        vm.subtitle += " article "
                    } else {
                        vm.subtitle += " articles "
                    }
                    vm.subtitle += "tagged \"" + vm.tagname + "\"";                   
                },
                (error) => {
                    console.log(error);
                });
    }
})();