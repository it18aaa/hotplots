(function () {

    angular.module('hotplots')
        .controller('logoutCtrl', ['user', '$timeout', loginCtrl]);

    function loginCtrl(user, $timeout) {
        vm = this;
        
        
        // are we logged in y?
        // set up form variables
        vm.user = user.getInfo();
        if (vm.user) {
            
            user.logout();
            vm.logOutSuccess = true;
            
        } else {
            vm.alreadyLoggedOut = true;
            vm.logOutSuccess = false;
        }

        
    }

})();