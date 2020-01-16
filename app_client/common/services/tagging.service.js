(function () {
    angular
        .module('hotplots')
        .service('tagging', ['$http', tagging]);


    function tagging($http) {

        var getTags = function (articleid) {
            return $http.get('/api/tag/list/article/' + articleid);
        }

        var listArticles = function (tagname) {
            // return a list of articles 
            // for a particular tag
        }

        var tag = function (articleid, tag) {
            
            var data = {
                articleid: articleid,
                tag: tag.toLowerCase()
            };
            return $http.post("/api/tag/add/article", data)
                .then(success => {
                    console.log("tagged")
                })
                .catch(error => {
                    console.log("already tagged")
                });
        }

        var untag = function (articleid, tag) {
            // remove a tag from an article
        }

        return {
            untag: untag,
            tag: tag,
            listArticles: listArticles,
            getTags: getTags
        }

    }

})();