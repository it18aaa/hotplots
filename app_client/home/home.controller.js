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
        articles.getList('-date')
            .then((res) => {
                vm.articlesByDate = res.data.slice(0, 3);
            },
                (e) => {
                    console.log(e);
                }
            );

        // fetch articles by likes, 
        // and set view model data to first 3
        //
        articles.getList('-likes')
            .then((res) => {
                vm.articlesByLikes = res.data.slice(0, 3);
            },
                (e) => {
                    console.log(e)
                }
            );
    }

})();