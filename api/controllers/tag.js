var mongoose = require('mongoose');

var Article = mongoose.model('Article');
var Tag = mongoose.model('Tag');

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

// data required
// articleid
// tag
// computed - article-count


module.exports.tagArticle = function (req, res) {

    // TODO: Validation?

    name = req.body.tag.trim();
    articleid = req.body.articleid;
    newTag = {
        name: name
    };

    // does tag exist,
    //    if so push articlid into artciles array
    // otherwise create tag    

    if (name && articleid) {

        Tag.pushArticle(name, articleid)
            .then(success => {
                sendJsonResponse(res, 200, {"message": "OK"});
            })
            .catch(error => {
                sendJsonResponse(res, 400, {
                    "message": error
                });
            });
    } else {
        sendJsonResponse(res, 400, {
            "message": "API call invoked incorrectly"
        });
    }

    //    sendJsonResponse(res, 200, { "message": "endpoint test ok" });
}

module.exports.untagArticle = function (req, res) {

    // get tag 
    //  does it exist ?
    // if so is article in tag

    name = req.body.tag.trim();
    articleid = req.body.articleid;
    filter = {
        name: name
    };
    if (name && articleid) {
        Tag.findOne(filter)
            .exec()
            .then(tag => {
                if (tag) {
                    if (tag.articles.includes(articleid)) {
                        tag.articles.splice(tag.articles.indexOf(articleid), 1);
                        tag.article_count--;
                        tag.save()
                            .then(
                                succes => {
                                    sendJsonResponse(res, 200, {
                                        "message": "Article untagged"
                                    });
                                }, error => {
                                    throw error;
                                })
                    } else {
                        throw "Article is not tagged";
                    }
                } else {
                    throw "Tag does not exist";
                }
            })
            .catch(error => {
                sendJsonResponse(res, 400, {
                    "message": error
                });
            });
    } else {
        sendJsonResponse(res, 400, {
            "message": "API call not invoked incorrectly"
        });
    }
}