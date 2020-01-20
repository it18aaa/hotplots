var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var User = mongoose.model('User');

module.exports.fetchById = (req, res) => {
    Article.findById(req.params.articleid)
        .exec((err, article) => {
            if (!article) {
                res.status(404)
                    .json({ "message": "Article not found!" });
                return;
            } else if (err) {

                res.status(404)
                    .json(err);
                return;
            }
            res.status(200).json(article);
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
            res.status(200)
                .json({
                    "message": "article modified"
                });
        })
        .catch(error => {
            res.status(400)
                .json({
                    "message": "unable to update"
                })
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

    switch (req.params.sortorder) {
        case 'newest':
        case undefined:
            sortOrder = {
                date: -1
            };
            break;
        case 'oldest':
            sortOrder = {
                date: 1
            };
            break;
        case 'active':
            sortOrder = {
                comment_count: -1
            };
            break;
        case 'popular':
            sortOrder = {
                likes: -1
            };
    }

    var query = Article.find(searchCriteria)
        .select(fields)
        .sort(sortOrder)
        .limit(limit);

    query.exec((err, docs) => {
        docs.forEach((item, index) => {
            item.body = item.body.slice(0, summarySize);
        });
        res.status(200).json(docs);
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
                return Article
                    .findById(articleid)
                    .exec();
            })
            .then(article => {
                article.likes++;
                return article.save();
            })
            .then(success => {
                res.status(201)
                    .json({
                        "message": "like added to user page;"
                    })
            })
            .catch(error => {
                res.status(400).json({
                    "message": error
                });
                console.log(error);
            })
    } else {
        res.status(400)
            .json({
                "message": "require both article id and user id"
            })

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

        // we want to both push the comment onto the array
        // and increment counter, atomically
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
                    res.status(200).json({
                        "message": "comment inserted"
                    })
                } else {
                    res.status(400)
                        .json(error)
                }
            }
        );
    } else {
        res.status(400)
            .json({
                "message": "article not found or comment too short"
            })
    }

};