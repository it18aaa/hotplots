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
        };

        let getJWT = function () {
            return $window.localStorage[key];
        };

        let register = function (credentials) {
            // returns promise so that 
            // error handling deferred to the caller
            return $http.post(regUrl, credentials)
                .then(
                    response => {
                        // registration successful
                        // store token
                        storeJWT(response.data.token);
                    },
                    response => {
                        // defer error to caller      
                        throw response;
                    })
        };

        let getInfo = function () {
            let token = getJWT();
            if (token) {
                let encodedPayload = token.split('.')[1]
                return JSON.parse($window.atob(encodedPayload));
            } else {
                return false;
            }
        }

        let login = function (credentials) {
            return $http.post(loginUrl, credentials)
                .then(
                    res => {
                        storeJWT(res.data.token);
                    },
                    error => {
                        throw error;
                    })
        };

        let logout = function () {
            $window.localStorage.removeItem(key);
        };

        let isAuthenticated = function () {
            let token = getJWT();
            if (token) {
                var payload = getInfo()
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
            register: register,
            getInfo: getInfo
        }

    }
})();