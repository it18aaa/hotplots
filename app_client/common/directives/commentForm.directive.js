angular
    .module('hotplots')
    .directive('commentForm', function () {
        return {
            restrict: 'AE',
            templateUrl: '/common/partials/commentForm.partial.html',
            link: function(scope) {
                // console.log('commentForm directive');
                // console.log(scope.vm.article._id);
                // console.log(scope.vm.user._id);
                // console.log(scope.vm.user.name);
            }
        };
    });