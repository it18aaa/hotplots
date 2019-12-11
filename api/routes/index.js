var express = require('express');
var ctrlArticle = require('../controllers/articles');

var router = express.Router();
console.log('api-router');
// map controllers to api routes
router.get('/article/list', ctrlArticle.articleList);
router.get('/article/:id', ctrlArticle.fetchById);
router.post('/article/create', ctrlArticle.articleCreate);

module.exports = router;