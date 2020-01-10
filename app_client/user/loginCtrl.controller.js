(function () {

    angular.module('hotplots')
        .controller('loginCtrl', ['user', '$timeout', loginCtrl]);

    function loginCtrl(user, $timeout) {
        vm = this;
        
        // are we logged in already?
        // set up form variables
        vm.user = user.getInfo();
        if (vm.user) {
            vm.alreadyAuth = true;
            vm.showForm = false;
        } else {
            vm.showForm = true;
        }

        vm.formSubmit = function () {
            user.login(vm.form)
                .then(
                    success => {
                        vm.userAuthSuccess = true;
                        vm.showForm = false;
                    },
                    reject => {
                        vm.userAuthFail = true;
                        vm.showForm = false;
                        vm.message = reject.data.message;
                        
                        $timeout(() => {
                            vm.userAuthFail = false;
                            vm.showForm = true;
                            vm.message = '';
                        }, 5000);
                    });
        }
    }

})();