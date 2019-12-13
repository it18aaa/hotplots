// Articles Controller
//

// bring in the article model
//
var articles = require('../models/article');


// create an article
//
module.exports.create = (req, res) => {
    //  TODO: stub
}

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
        img: articles.data[id].img});
        
};

// list articles
//
module.exports.list = (req,res) => {
    order = req.params.order;
    res.render('articlelist', {articles: articles.data});    
}
