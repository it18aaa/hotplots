var express = require('express');
var router = express.Router();

var ctrlArticle = require('article')

// map controllers to api routes


router.get('/artcle/id, ctrlArticle.fetchById');