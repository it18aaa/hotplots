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
            console.log("trying to tag " + articleid + " with '" + tag);
            var data = {
                articleid: articleid,
                tag: tag
            };
            return $http.post("/api/tag/add/article", data)
                .then(success => {
                    console.log("did it work?")
                })
                .catch(error => {
                    console.log("it didn't work!")
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