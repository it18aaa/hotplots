(function () {

    angular.module('hotplots')
        .controller('tagListCtrl', ['$scope', 'tagging', 'user', '$routeParams', tagListCtrl]);

    function tagListCtrl($scope, tagging, user, $routeParams) {
        var vm = this;
        vm.title = "Tags";
        vm.userid = user.getInfo();
        sortorder = 'name';  // name or count

        refreshList();

        vm.order = function (input) {
            sortorder = input;
            refreshList();
        };

        function refreshList() {
            tagging.getTagCloud(sortorder)
                .then(
                    (result) => {
                        vm.tags = result.data;
                    },
                    (error) => {
                        console.log(error);
                    });
        }
    }
})();