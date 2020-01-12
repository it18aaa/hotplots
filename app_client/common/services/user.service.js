(function () {
    angular
        .module('hotplots')
        .service('user', ['$http', '$window', user]);

    // User authentication control
    // adapted from Getting MEAN by Simon Holmes
    //
    function user($http, $window) {
        // user info variable;
        // persist the same variable in memory
        // so that we can watch for changes!
        var info = false;

        // route config
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
            // returns promise to caller after,
            // credentials are stored, 
            return $http.post(regUrl, credentials)
                .then(
                    success => {
                        // registration successful
                        // store token
                        storeJWT(success.data.token);
                    },
                    reject => {
                        // defer error to caller      
                        throw reject;
                    })
        };

        let getInfo = function () {
            // if info object isn't set
            if (!info) {
                // check token for info
                let token = getJWT();
                if (token) {
                    // if info in token
                    let encodedPayload = token.split('.')[1]
                    info = JSON.parse($window.atob(encodedPayload));
                } else {
                    // otherwise clear info
                    info = false;
                }
            }
            // return info
            return info;
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
            info = false;
        };

        // deprecated?
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