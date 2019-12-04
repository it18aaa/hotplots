// articles Controller
//
var articles = require('../models/article');

const view = (req, res) => {

    id = req.params.id;   
    
    body = articles.data[id].body.replace(/\n/g, "<br />");
    console.log(`body : ${body}`);
        
    res.render('article', {
        date: articles.data[id].date, 
        author: articles.data[id].author,
        title: articles.data[id].title,        
        //body: articles.data[id].body,
        body: body,
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