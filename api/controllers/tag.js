var mongoose = require('mongoose');

var Article = mongoose.model('Article');
var Tag = mongoose.model('Tag');

module.exports.tagArticle = function (req, res) {

    //TODO: Validation
    let name = req.body.tag.trim();
    let articleid = req.body.articleid;

    if (name && articleid) {
        Tag.tagArticle(name, articleid)
            .then(success => {
                res.status(200)
                    .json({
                        "message": "OK"
                    })
            })
            .catch(error => {
                res.status(400)
                    .json({
                        "message": error
                    });
            });
    } else {
        res.status(400)
            .json({
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
                res.status(201)
                    .json({
                        "message": "updated"
                    });
            })
            .catch(error => {
                res.status(400)
                    .json({
                        "message": error
                    });
            });
    } else {
        res.status(400)
            .json({
                "message": "API call invoked incorrectly"
            });
    }
}

module.exports.getTags = function (req, res) {

    articleid = req.params.articleid;
    console.log("getting tags for " + articleid)
    Tag.find({
        articles: articleid
    })
        .exec()
        .then(tags => {
            res.status(200)
                .json(tags);
        })
        .catch(error => {
            res.status(400)
                .json({
                    "message": "there was an error"
                });
        })
}

module.exports.getTagCloud = function (req, res) {

    var order;
    if (req.params.order == 'name') {
        order = {
            name: 1
        };
    } else if (req.params.order == 'count') {
        order = {
            article_count: -1
        };
    } else {
        res.status(400)
            .json({
                "message": "API invoked incorrectly "
            });
    }
    Tag.find({})
        .select('_id name article_count')
        .sort(order)
        .exec()
        .then(tagcloud => {
            res.status(200)
                .json(tagcloud);
        })
        .catch(error => {
            res.status(400)
                .json(error);
        })
}

module.exports.getTaggedArticles = function (req, res) {
    tagid = req.params.tagid;

    //TODO: Validation
    Tag.findById(tagid)
        .populate('articles',
            '_id title synopsis comment_count likes author authorid date picture',
            null, {
            sort: {
                date: -1
            }
        })
        .exec()
        .then(list => {
            res.status(200)
                .json(list);
        })
        .catch(error => {
            res.status(400)
                .json(error);
        });
}