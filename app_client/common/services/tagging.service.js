import {
    untagArticle
} from "../../../api/controllers/tag";

(function () {
    angular
        .module('hotplots')
        .service('tagging', ['$http', tagging]);


    var tagging = function ($http) {

        var getTags = function (articleid) {
            // return list of tags
            // for the article read page, and various views
        }

        var listArticles = function (tagname) {
            // return a list of articles 
            // for a particular tag
        }

        var tag = function (article, tag) {
            // add a tag to an article
        }

        var untag = function (article, tag) {
            // remove a tag from an article
        }

    }

})();