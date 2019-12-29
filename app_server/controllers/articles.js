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
// GET part, send form
module.exports.create = (req, res) => {
    //  TODO: stub
    console.log('ctrlArtcle.create() called');
    res.render('articlecreate');
};

// create an article
// POST - do stuff with form data
//
module.exports.doCreate = (req, res) => {
    // set up request 
    var path = '/api/article/create';

    var postData = {
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags,
        author: 'test user',
        picture: req.body.picture
    };

    var requestOpt = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };

    request(requestOpt, (apierr, apires, apibody) => {
        if (apierr) {
            console.log("request error");
            console.log(err);
        } else if (apires.statusCode === 200) {
            console.log("request - status 200");
            console.log(apibody);
        } else {
            console.log("request status code ");
            console.log(apires.statusCode);
        }
        res.redirect('/articles/list');
    })
};

// read an article
//
module.exports.read = (req, res) => {

    id = req.params.articleid;

    // set up request 
    var path = '/api/articles/read/';

    var requestOpt = {
        url: apiOptions.server + path + id,
        method: 'GET',
        json: {}
    };

    request(requestOpt, (apierr, apires, article) => {
        if (apierr) {
            res.send("error page!");
        } else {
            if (apires.statusCode == 200) {
                body = article.body.replace(/\n/g, "<br />");
                res.render('articleread', {
                    date: article.date,
                    author: article.author,
                    title: article.title,
                    body: body,
                    comments: article.comments,
                    likes: article.likes,
                    tags: article.tags,
                    img: article.picture
                });
            } else {
                // res.render('error', {
                //     message: "stuff went wrong",
                //     error: apierr
                // });
                res.redirect('/');
            }
        }

    });

};

// list articles
//
module.exports.list = (req, res) => {
    order = req.params.order;

    // set up request 
    var path = '/api/article/list';

    var requestOpt = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };


    request(requestOpt, (apierr, apires, articles) => {
        //res.send(apibody);

        res.render('articlelist', {
            articles: articles
        });
        console.log(`articles.length = ${articles.length}`)
        //res.send(articles);
    });


}