(function () {
    angular.module('hotplots')
        .controller('articleReadCtrl', [
            '$scope',
            'articles',
            'tagging',
            '$routeParams',
            'user',
            '$location',
            '$anchorScroll',
            articleReadCtrl
        ]);

    function articleReadCtrl($scope, articles, tagging, $routeParams, user, $location, $anchorScroll) {
        var vm = this;

        vm.commentFormShow = false;
        vm.taggingFormShow = false;
        vm.user = user.getInfo();
        vm.tag = undefined;
        vm.tags = [];

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
                    vm.taggingFormShow = false;
                    refreshTags()
                }).catch(error => {
                    console.log("failed to tag item")
                });
        }

        vm.commentFormSubmit = function () {
            articles.comment(vm.article._id, vm.user._id, vm.user.name, vm.comment)
                .then(success => {
                        refreshView();
                        vm.commentFormShow = false;
                        vm.comment = '';
                    },
                    reject => {
                        console.log(reject);
                    });
        }

        vm.commentReply = function (comment) {
            vm.commentFormShow = true;
            vm.comment = "[Quote]" + comment.author + ":\n" + comment.body + "[/Quote]\n\n";
            // TODO: $location.hash() & $anchorScroll
        }

        function refreshView() {
            articles.read($routeParams.articleid)
                .then(
                    (result) => {
                        vm.article = result.data;
                    })
                .then(success => {
                    refreshTags();
                })
                .catch(error => {
                    console.log(error)
                });
        }

        function refreshTags() {
            return tagging.getTags(vm.article._id)
                .then(success => {
                    vm.tags = success.data;
                });
        }
    }
})();