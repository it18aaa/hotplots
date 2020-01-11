angular
    .module('hotplots')
    .directive('navbar', ['user', function (user) {
        return {
            restrict: 'AE',
            scope: { 
                
            },
            templateUrl: '/common/partials/navbar.partial.html',
            link: function(scope) {
                ///scope.user = user.getInfo();

                scope.$watch(function() {
                    return user.getInfo();
                }, 
                function(update) {
                    scope.user = update;
                })
            }
        };
    }]);