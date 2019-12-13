// Questions controller
//

// bring in the questions model
//
var questions = require('../models/questions');

module.exports.create = (req, res) => {
    res.render('questioncreate', { title: "Create a new question"});

}

module.exports.list = (req, res) => {
    res.render('questionlist', {questions: questions.data});

}

module.exports.read = (req, res) => {
    res.render('questionread', { title: "Display one question"});

}