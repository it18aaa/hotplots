// articles Controller
//
var articles = require('../models/article');

const view = (req, res) => {

    id = req.params.id;   
        
    res.render('article', {
        date: articles.data[id].date, 
        author: articles.data[id].author,
        title: articles.data[id].title,        
        body: articles.data[id].body,
        img: articles.data[id].img});
};

const list = (req,res) => {
    order = req.params.order;
    res.render('articlelist', {articles: articles.data});    
}

module.exports = {
    view,
    list
};