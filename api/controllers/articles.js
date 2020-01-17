var mongoose = require('mongoose');

var Article = mongoose.model('Article');
var User = mongoose.model('User');

// utility function, send content and response in one line
var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports.fetchById = (req, res) => {
    Article.findById(req.params.articleid)
        .exec((err, article) => {
            if (!article) {
                console.log(`fetchById Err Record not found`);
                sendJsonResponse(res, 404, {
                    "message": "Article not found!"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, article);
        });
}

module.exports.update = (req, res) => {

    articleid = req.params.articleid;
    article = req.body;

    Article.findById(articleid)
        .then(existing => {
            existing.title = article.title;
            existing.body = article.body;
            existing.synopsis = article.synopsis;
            existing.picture = article.picture;
            existing.modified = article.modified;
            return existing.save();
        })
        .then(success => {
            sendJsonResponse(res, 200, {
                "message": "article modified"
            });
        })
        .catch(error => {
            sendJsonResponse(res, 400, {
                "message": "unable to update"
            });
        })

}

module.exports.articleList = (req, res) => {

    // set defaults     
    //   
    var searchCriteria = undefined;
    var fields = "_id title likes comment_count author body date picture synopsis modified";
    var sortOrder = "-date";
    var limit = 100;
    var summarySize = 150;

    // search criteria based on input
    //
    if (req.params.tagfilter) {
        var tag = req.params.tagfilter;
        searchCriteria = {
            'tags': tag
        };



    } else if (req.params.author) {
        var author = req.params.author;
        searchCriteria = {
            'author': author
        };
    };

    if (req.params.sortorder) {
        sortOrder = req.params.sortorder;
    }

    var query = Article.find(searchCriteria)
        .select(fields)
        .sort(sortOrder)
        .limit(limit);

    query.exec((err, docs) => {

        docs.forEach((item, index) => {
            item.body = item.body.slice(0, summarySize);
        });

        sendJsonResponse(res, 200, docs);
    })
}

module.exports.articleCreate = (req, res) => {

    // tags should be parsed separately, and added to 
    // individual tag documents, in order to track
    // whereabouts pages are
    Article.create({
        title: req.body.title,
        author: req.body.author,
        synopsis: req.body.synopsis,
        body: req.body.body,
        picture: req.body.picture,
        author: req.body.author,
        authorid: req.body.authorid,
        date: new Date()
    }, (err, article) => { // callback
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json({
                    "status": "success",
                    "title": article.title
                });
        }
    });
}

module.exports.articleLike = (req, res) => {

    // TODO: Validation

    articleid = req.body.articleid;
    userid = req.body.userid;

    if (articleid && userid) {
        User.findById(userid)
            .exec()
            .then(user => {
                if (!user.articlelikes.includes(articleid)) {
                    user.articlelikes.push(articleid);
                    return user.save();
                } else {
                    throw "user has already liked that article";
                }
            })
            .then(success => {
                return Article.findById(articleid).exec();
            })
            .then(article => {
                article.likes++;
                return article.save();
            })
            .then(success => {
                sendJsonResponse(res, 201, {
                    "message": "like added to user page;"
                });
            })
            .catch(error => {
                sendJsonResponse(res, 400, {
                    "message": error
                });
                console.log(error);
            })
    } else {
        sendJsonResponse(res, 400, {
            "message": "require both article id and user id"
        });
    };
}

module.exports.articleComment = (req, res) => {

    // if we have an articleid and a comment body, we're good to go
    if (req.params.articleid && req.body.body) {

        filter = {
            _id: req.params.articleid
        };

        // construct the comment
        var comment = {
            body: req.body.body,
            author: req.body.author,
            authorid: req.body.authorid,
            date: new Date(),
            likes: 0,
        };

        // we want to push the comment onto the array
        update = {
            $push: {
                comments: comment
            },
            $inc: {
                comment_count: 1
            }
        };

        // return the new instance of the document
        options = {
            new: true
        };

        Article.findOneAndUpdate(filter, update, options,
            (error, doc) => {
                if (!error) {
                    //console.log(doc);
                    sendJsonResponse(res, 200, {
                        "message": "comment inserted"
                    });
                } else {
                    sendJsonResponse(res, 400, error);
                }
            }
        );
    } else {
        sendJsonResponse(res, 400, {
            "message": "article not found or comment too short"
        });
    }

};