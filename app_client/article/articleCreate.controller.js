(function () {

    angular.module('hotplots')
        .controller('articleCreateCtrl', ['$scope', 'articles', '$routeParams', articleCreateCtrl]);

    function articleCreateCtrl($scope, articles, $routeParams) {
        var vm = this;

        vm.formSubmit = function () {
            // TODO: Validation

            // 
            var tags = vm.form.tags.split(",").map((tag) => {
                return tag.trim()
            });

            var newArticle = {
                title: vm.form.title,
                synopsis: vm.form.synopsis,
                body: vm.form.body,
                tags: tags,
                picture: vm.form.picture,
                author: "articleCreateCtrl",
                date: new Date()
            }

            articles.create(newArticle)
                .then(
                    (response) => {
                        // worked ok
                        alert("Article created");
                        vm.form = {};

                    },
                    (error, response) => {
                        alert("There was a problem");
                    })
        }
    }


})();