(function () {

    angular.module('hotplots')
        .controller('registerCtrl', ['user', registerCtrl]);

    function registerCtrl(user) {
        vm = this;
        vm.user = user.getInfo();
        console.log(user.getInfo());

        // are we logged in already

        if (vm.user) {
            vm.alreadyRegistered = true;
            vm.showForm = false;
        } else {
            vm.showForm = true;
        }

        vm.formSubmit = function () {
            user.register(vm.form)
                .then(
                    response => {
                        vm.userRegSuccess = true;
                        vm.showForm = false;
                        vm.response = response;
                    },
                    response => {
                        vm.userRegFail = true;    
                        vm.showForm = false;                 
                    });

        }
    }

})();