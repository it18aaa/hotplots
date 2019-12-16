var mongoose = require('mongoose');

var Article = mongoose.model('Article');

// utility function, send content and response in one line
var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports.fetchById = (req, res) => {    
    Article.findById(req.params.id)
        .exec((err, article) => {
            sendJsonResponse(res, 200, article);
        });    
   //sendJsonResponse(res, 200, {"status" : "success"});
}

module.exports.articleList = (req, res) => {
    console.log('articleList');
    sendJsonResponse(res, 200, {"status" : "success"});
}

module.exports.articleCreate = (req, res) => {
    console.log(`create new article: title: ${req.body.title} author ${req.body.author}`);    
    Article.create({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        date: new Date()
    }, (err, article) => {    // callback
        if(err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json({
                    "status" : "success",
                    "title" : article.title
                });
        }
    });    
} 