(function () {

    angular.module('hotplots')
        .controller('articleReadCtrl', [
            '$scope',
            'articles',
            'tagging',
            '$routeParams',
            'user',
            articleReadCtrl
        ]);

    function articleReadCtrl($scope, articles, tagging, $routeParams, user) {
        var vm = this;
        vm.commentFormShow = false;
        vm.taggingFormShow = false;
        vm.user = user.getInfo();
        vm.tag = undefined;

        refreshView();

        vm.commentFormToggle = function () {
            vm.commentFormShow = !vm.commentFormShow;
        }

        vm.taggingFormToggle = function () {
            vm.taggingFormShow = !vm.taggingFormShow;
        }

        vm.likeButtonPress = function () {
            articles.like(vm.article._id, vm.user._id)
                .then(success => {
                    refreshView();
                })
                .catch(error => {
                    console.log(error);
                })
        }

        vm.taggingFormSubmit = function () {
            tagging.tag(vm.article._id, vm.tag)
                .then(success => {

                    console.log("I think that worked")
                }).catch(error => {
                    console.log("failed to tag item")
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