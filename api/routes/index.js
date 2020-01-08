var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var ctrlArticle = require('../controllers/articles');
var ctrlAuth = require('../controllers/authentication');

// map controllers to api routes
router.get('/article/list', ctrlArticle.articleList);
router.get('/article/list/tag/:tagfilter/', ctrlArticle.articleList);
router.get('/article/list/author/:author/', ctrlArticle.articleList);
router.get('/article/list/sort/:sortorder/', ctrlArticle.articleList);

// some basic article api functions
router.get('/articles/read/:articleid', ctrlArticle.fetchById);
router.post('/article/create', auth, ctrlArticle.articleCreate);
router.post('/article/:articleid/comment', ctrlArticle.articleComment);

// authentication endpoints

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;