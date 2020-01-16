(function () {

    angular.module('hotplots')
        .controller('articleUpdateCtrl', ['$scope', 'articles', '$routeParams', 'user', articleUpdateCtrl]);

    function articleUpdateCtrl($scope, articles, $routeParams, user) {
        var vm = this;
        vm.title = "Update Article";
        vm.form = {};
        vm.articleid = $routeParams.articleid;

        articles.read(vm.articleid)
            .then(article => {

                vm.form.title = article.data.title;
                vm.form.synopsis = article.data.synopsis;
                vm.form.picture = article.data.picture;
                vm.form.body = article.data.body;
            });

        vm.formSubmit = function () {

            var updatedArticle = {
                title: vm.form.title,
                synopsis: vm.form.synopsis,
                body: vm.form.body,
                picture: vm.form.picture,
                modified: new Date()
            }

            articles.update(vm.articleid, updatedArticle)
                .then(
                    (response) => {
                        // worked ok
                        alert("Article updated");
                        vm.form = {};
                    },
                    (error, response) => {
                        alert("There was a problem");
                    })
        }
    }

})();