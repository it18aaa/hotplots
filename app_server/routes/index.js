// Express Application Routing
//
var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlArticle = require('../controllers/articles');
const ctrlQuestions = require('../controllers/questions');

// Frontpage
//
router.get('/', ctrlMain.index);

// article related routes
//
router.get('/articles/create', ctrlArticle.create);
router.post('/articles/create', ctrlArticle.doCreate);
router.get('/articles/list', ctrlArticle.list);
router.get('/articles/:id', ctrlArticle.read);

// question related routes
//
router.get('/questions/create', ctrlQuestions.create);
router.get('/questions/list', ctrlQuestions.list);
router.get('/questions/:id', ctrlQuestions.read);

// export the routing table
//
module.exports = router;
