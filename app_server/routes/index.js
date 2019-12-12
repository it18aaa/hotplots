var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlArticle = require('../controllers/articles');
const ctrlQuestions = require('../controllers/questions');


// Application Routing
//
router.get('/', ctrlMain.index);

// a sample article
//
router.get('/articles', ctrlArticle.list);
router.get('/article/:id', ctrlArticle.view);

router.get('/questions/ask', ctrlQuestions.create);
router.get('/questions/list', ctrlQuestions.list);


module.exports = router;
