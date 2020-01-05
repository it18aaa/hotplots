angular
    .module('hotplots')
    .controller('homeCtrl', ['$scope','articles', homeCtrl]);

// inject the articles service
function homeCtrl($scope, articles) {

    // vm use vm instead of $scope
    // vm = view model
    var vm = this;
    vm.title = "Welcome to our gardening community website!";

    vm.pageHeader = {
        title: 'hotplots stuff'
    };

    // fetch articles by date
    articles.getList('date')
        .then((res) => {
                vm.articlesByDate = res.data.slice(0, 3);
            },
            (e) => {
                console.log(e);
            }
        );

    articles.getList('likes')
        .then((res) => {
                vm.articlesByLikes = res.data.slice(0, 3);
            },
            (e) => {
                console.log(e)
            }
        );
}