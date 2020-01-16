var mongoose = require('mongoose');

var Article = mongoose.model('Article');
var Tag = mongoose.model('Tag');

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports.tagArticle = function (req, res) {

    let name = req.body.tag.trim();
    let articleid = req.body.articleid;

    if (name && articleid) {
        Tag.tagArticle(name, articleid)
            .then(success => {
                sendJsonResponse(res, 200, {
                    "message": "OK"
                });
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
}

module.exports.untagArticle = function (req, res) {

    let name = req.body.tag.trim();
    let articleid = req.body.articleid;

    if (name && articleid) {
        Tag.untagArticle(name, articleid)
            .then(outcome => {
                sendJsonResponse(res, 201, {
                    "message": "updated"
                })
            })
            .catch(error => {
                sendJsonResponse(res, 400, {
                    "message": error
                })
            });

    } else {
        sendJsonResponse(res, 400, {
            "message": "API call invoked incorrectly"
        });

    }
}

module.exports.getTags = function (req, res) {

    articleid = req.params.articleid;
    console.log("getting tags for " + articleid)
    var query = Tag.find({articles: articleid})
 //       .select('_id name')
        .exec()
        .then(tags => {
            sendJsonResponse(res, 200, tags);
        })
        .catch(error => {
            sendJsonResponse(res, 400, {"message":"there was an error"})
        })
}

module.exports.getTaggedArticles = function( req, res) {
    tagid = req.params.tagid;     
       
    //TODO: Validation
    Tag.findById(tagid)
        .populate("articles")
        .exec()
        .then(list => {
            sendJsonResponse(res, 200, list.articles);        
        })
        .catch(error => {
            sendJsonResponse(res, 400, error);        
        })
        
}