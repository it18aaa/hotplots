// Articles Controller
//

// bring in the article model
//
var articles = require('../models/article');
var request = require('request');

var apiOptions = {
    server: 'http://localhost:3000'
};

// create an article
//
module.exports.create = (req, res) => {
    //  TODO: stub
    console.log('ctrlArtcle.create() called');
    res.render('articlecreate');
};

module.exports.doCreate = (req, res) => {
    // set up request 
    var path = '/api/article/create';

    var postData = {
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags
    };

    var requestOpt = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };
    request(requestOpt, (apierr, apires, apibody) => {
        res.redirect('/articles/list');
    })
};

// read an article
//
module.exports.read = (req, res) => {

    id = req.params.id;

    // TODO: hacked in processing of body text, so we can have
    // line breaks- needs to be refactored!
    //
    body = articles.data[id].body.replace(/\n/g, "<br />");
    console.log(`body : ${body}`);

    res.render('articleread', {
        date: articles.data[id].date,
        author: articles.data[id].author,
        title: articles.data[id].title,
        body: body,
        comments: articles.data[id].comments,
        likes: articles.data[id].likes,
        tags: articles.data[id].tags,
        img: articles.data[id].img
    });

};

// list articles
//
module.exports.list = (req, res) => {
    order = req.params.order;
    res.render('articlelist', {
        articles: articles.data
    });
}
