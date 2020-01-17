(function () {

    angular
        .module('hotplots')
        .controller('homeCtrl', ['$scope', 'articles', 'tagging', homeCtrl]);

    // inject the articles service
    function homeCtrl($scope, articles, tagging) {

        // vm use vm instead of $scope
        // vm = view model
        var vm = this;
        vm.title = "Hot Plots!"


        tagging.getTagCloud('count')
            .then(tags => {
                vm.popularTags = tags.data;
            })
            .catch(error => {
                console.log(error)
            })

        // fetch articles by date, 
        // set view model data to first 3
        //
        articles.getList('newest')
            .then((res) => {
                    vm.articlesNewest = res.data.slice(0, 3);
                },
                (e) => {
                    console.log(e);
                }
            );

        // fetch articles by likes, 
        // and set view model data to first 3
        //
        articles.getList('popular')
            .then((res) => {
                    vm.articlesPopular = res.data.slice(0, 3);
                },
                (e) => {
                    console.log(e)
                }
            );

        articles.getList('active')
            .then((res) => {
                    vm.articlesActive = res.data.slice(0, 3);
                },
                (e) => {
                    console.log(e)
                }
            );
    }

})();