var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var ctrlArticle = require('../controllers/articles');
var ctrlAuth = require('../controllers/authentication');
var ctrlTag = require('../controllers/tag');

// map controllers to api routes


router.get('/article/list/tag/:tagid/', ctrlTag.getTaggedArticles);
router.get('/article/list/tag/:tagid/sort/:order', ctrlTag.getTaggedArticles);

router.get('/article/list/author/:author/', ctrlArticle.articleList);
router.get('/article/list/sort/:sortorder/', ctrlArticle.articleList);
//router.get('/article/list', ctrlArticle.articleList);

// some basic article api functions
router.get('/articles/read/:articleid', ctrlArticle.fetchById);
router.post('/article/create', ctrlArticle.articleCreate);
router.put('/article/update/:articleid', ctrlArticle.update);
router.post('/article/:articleid/comment', ctrlArticle.articleComment);
router.post('/article/like', ctrlArticle.articleLike);

// tagging endpoints

router.post('/tag/add/article/', ctrlTag.tagArticle);
router.post('/tag/remove/article', ctrlTag.untagArticle);
router.get('/tag/list/article/:articleid', ctrlTag.getTags);

// order is either name or count
router.get('/tag/cloud/sort/:order', ctrlTag.getTagCloud);


// authentication endpoints
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;