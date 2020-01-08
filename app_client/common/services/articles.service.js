(function () {
    angular
        .module('hotplots')
        .service('articles', ['$http', articles]);

    function articles($http) {

        var getList = function (sortOrder) {
            if (sortOrder === undefined) {
                sortOrder = 'date';
            }

            // if(sortOrder === 'likes') {
            //     sortOrder = '-likes';
            // }
            return $http.get('/api/article/list/sort/' + sortOrder.trim());
        }

        var read = function (id) {
            if (id === undefined) {
                // do error
                return;
            }
            return $http.get('/api/articles/read/' + id.trim());
        }

        return {
            getList: getList,
            read: read
        };
    }
})();