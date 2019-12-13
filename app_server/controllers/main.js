// Frontpage controller
// TODO: Tidy up
//
var articles = require('../models/article');
var questions = require('../models/questions');


module.exports.index = (req, res) => {
    
    // mock some specific articles
    // these might be better in the model?
    //
    
    res.render('frontpage', {
        // hacked in dummy data
        //
        artByAuth: articles.data.slice(2,5),
        artByFeat: articles.data.slice(5,8),
        artByTag: articles.data.slice(8,10),
        questions: questions.data.slice(0,6)
    });
};
