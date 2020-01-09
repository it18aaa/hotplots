(function () {
    angular
        .module('hotplots')
        .service('articles', ['$http', articles]);

    function articles($http) {

        var getList = function (sortOrder) {
            if (sortOrder === undefined) {
                sortOrder = '-date';
            }

            return $http.get('/api/article/list/sort/' + sortOrder.trim());
        }

        var read = function (id) {
            if (id === undefined) {
                // do error
                return;
            }
            return $http.get('/api/articles/read/' + id.trim());
        }

        var create = function (article) {
            console.log('doing create!');

            var url = '/api/article/create';

            return $http.post(url, article);
                
        }

        return {
            getList: getList,
            read: read,
            create: create
        };
    }
})();