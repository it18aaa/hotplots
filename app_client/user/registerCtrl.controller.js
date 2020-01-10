(function() {

    angular.module('hotplots')
        .controller('registerCtrl', ['user', registerCtrl]);

        function registerCtrl(user) {
            vm = this;

            vm.formSubmit = function() {
                console.log(vm.form);
                user.register(vm.form);
            }
        }

})();