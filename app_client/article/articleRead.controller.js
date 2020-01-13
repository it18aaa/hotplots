(function () {

    angular.module('hotplots')
        .controller('articleReadCtrl', ['$scope', 'articles', '$routeParams', 'user', articleReadCtrl]);

    function articleReadCtrl($scope, articles, $routeParams, user) {
        var vm = this;
        vm.commentFormShow = false;
        vm.user = user.getInfo();

        refreshView();

        vm.commentFormToggle = function () {
            vm.commentFormShow = !vm.commentFormShow;
        }

        vm.likeButtonPress = function() {
            articles.like(vm.article._id, vm.user._id)
                .then(success => {
                    refreshView();
                })
                .catch(error => {
                    console.log(error);
                })
        }

        vm.commentFormSubmit = function () {

            articles.comment(vm.article._id, vm.user._id, vm.user.name, vm.comment)
                .then(success => {
                    //console.log(success);                    
                    refreshView();
                    vm.commentFormShow = false;
                    vm.comment = '';
                },
                    reject => {
                        console.log(reject);
                    });
        }

        function refreshView() {
            articles.read($routeParams.articleid)
                .then(
                    (result) => {
                        vm.article = result.data;
                    },
                    (error) => {
                        console.log(error);
                    });
        }

    }
})();