(function () {
    angular
        .module('hotplots')
        .service('user', ['$http', '$window', user]);

    // adapted from Getting MEAN by Simon Holmes
    //
    function user($http, $window) {

        // config
        let key = 'hotplotsJWT';
        let regUrl = '/api/register';
        let loginUrl = '/api/login';

        // methods to deal with JWT and registering user
        let storeJWT = function (token) {
            $window.localStorage[key] = token;
            console.log('storeJWT');
            console.log(token);
        };

        let getJWT = function () {
            return $window.localStorage[key];
            console.log('getJWT');
            console.log(token);
        };

        let register = function (credentials) {
            return $http.post(regUrl, credentials)
                .then(res => {
                    console.log(res);
                    storeJWT(res.data.token);
                })
        };

        let login = function (credentials) {
            return $http.post(loginUrl, credentials)
                .then(res => {
                    storeJWT(res.data.token);
                })
        };

        let logout = function () {
            $window.localStorage.removeItem(key);
        };

        let isAuthenticated = function () {
            let token = getJWT();
            if (token) {
                let payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        return {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getJWT: getJWT,
            storeJWT: storeJWT,
            register: register
        }

    }
})();