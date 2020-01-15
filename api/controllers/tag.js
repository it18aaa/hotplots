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

    letname = req.body.tag.trim();
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


    // Tag.findOne(filter)
    //     .exec()
    //     .then(tag => {
    //         if (tag) {
    //             if (tag.articles.includes(articleid)) {
    //                 tag.articles.splice(tag.articles.indexOf(articleid), 1);
    //                 tag.article_count--;
    //                 tag.save()
    //                     .then(
    //                         succes => {
    //                             sendJsonResponse(res, 200, {
    //                                 "message": "Article untagged"
    //                             });
    //                         }, error => {
    //                             throw error;
    //                         })
    //             } else {
    //                 throw "Article is not tagged";
    //             }
    //         } else {
    //             throw "Tag does not exist";
    //         }
    //     })
    //     .catch(error => {
    //         sendJsonResponse(res, 400, {
    //             "message": error
    //         });
    //     });

}