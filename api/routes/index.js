var express = require('express');
var ctrlArticle = require('../controllers/articles');

var router = express.Router();


// map controllers to api routes
router.get('/article/list', ctrlArticle.articleList);
router.get('/article/list/tag/:tagfilter/', ctrlArticle.articleList);
router.get('/article/list/author/:author/', ctrlArticle.articleList);
router.get('/article/list/sort/:sortorder/', ctrlArticle.articleList);

// some basic article api functions
router.get('/articles/read/:articleid', ctrlArticle.fetchById);

router.post('/article/create', ctrlArticle.articleCreate);

module.exports = router;