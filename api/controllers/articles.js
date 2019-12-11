var mongoose = require('mongoose');

var Article = mongoose.model('Article');

// utility function, send content and response in one line
var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports.fetchById = (req, res) => {
    sendJsonResponse(res, 200, {"status" : "success"});
}
module.exports.articleList = (req, res) => {
    sendJsonResponse(res, 200, {"status" : "success"});
}

module.exports.articleCreate = (req, res) => {
    sendJsonResponse(res, 200, {"status" : "success"});
}