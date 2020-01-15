(function () {

    angular.module('hotplots')
        .controller('articleCreateCtrl', ['$scope', 'articles', '$routeParams', 'user', articleCreateCtrl]);

    function articleCreateCtrl($scope, articles, $routeParams, user) {
        var vm = this;

        vm.formSubmit = function () {
            // TODO: Validation

            // old tagging implementation
            // var tags = vm.form.tags.split(",")
            //     .map((tag) => {
            //         return tag.trim()
            //     });

            let userInfo = user.getInfo();

            var newArticle = {
                title: vm.form.title,
                synopsis: vm.form.synopsis,
                body: vm.form.body,
                picture: vm.form.picture,
                author: userInfo.name,
                authorid: userInfo._id,
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