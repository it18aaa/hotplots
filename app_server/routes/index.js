var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlArticle = require('../controllers/articles');


// Application Routing
//
router.get('/', ctrlMain.index);

// a sample article
//
router.get('/article/:id', ctrlArticle.view);
router.get('/articles/:order', ctrlArticle.list);

//  registration form
//
//router.get('/users/register', ctrlUsers.registration);


//router.get('/article/list/:order', ctrlArticle.list)

module.exports = router;
