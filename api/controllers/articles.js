var mongoose = require('mongoose');

var Article = mongoose.model('Article');

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

module.exports.articleList = (req, res) => {

    // set defaults     
    //   
    var searchCriteria = undefined;
    var fields = "_id title likes author body date picture tags";
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

    console.log(`req.params.sortorder ${req.params.sortorder}`);
    if (req.params.sortorder) {
        sortOrder = req.params.sortorder;
        console.log(`sort order is now ${sortOrder}`);
    }

    var query = Article.find(searchCriteria)
        .select(fields)
        .sort(sortOrder)
        .limit(limit);

    query.exec((err, docs) => {
        // shorten the body to a preview
        // reducing the size of data sent
        //
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
        tags: req.body.tags,
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

module.exports.articleComment = (req, res) => {

    // if we have an articleid and a comment body, we're good to go
    if (req.params.articleid && req.body.body) {
        
        filter = { _id: req.params.articleid };

        // construct the comment
        var comment = {
            body: req.body.body,
            author: req.body.author,
            authorid: req.body.authorid,
            date: new Date(),
            likes: 0,
        };

        console.log('adding comment:');
        console.log(comment);
        // we want to push the comment onto the array
        update = {
            $push:
                { comments: comment }
        };

        // return the new instance of the document
        options = { new: true };

        Article.findOneAndUpdate(filter, update, options,
            (error, doc) => {
                if (!error) {
                    //console.log(doc);
                    sendJsonResponse(res, 200, {"message":"comment inserted"});
                } else {
                    sendJsonResponse(res, 400, error);
                }
            }
        );
    } else {
        sendJsonResponse(res, 400, {"message": "article not found or comment too short"});
    }

};

// module.exports.articleCommentOld = (req, res) => {
//     console.log("going to try and create something!");
//     var id = req.params.articleid;
//     if (id) {
//         Article.findById(id)
//             .select('comments')
//             .exec((err, article) => {
//                 if (!err) {
//                     //  we've found the article
//                     //console.log(article);
//                     //sendJsonResponse(res, 200, { "message": "Adding comment" });
//                     article.comments.push({
//                         title: req.body.title,
//                         body: req.body.body,
//                         author: req.body.author,
//                         date: req.body.date,
//                     });
//                     article.save()


//                 } else {
//                     sendJsonResponse(res, 400, err);
//                 }

//             });
//     } else {
//         sendJsonResponse(res, 404, { "message": "Article not found" })
//     }
// }

