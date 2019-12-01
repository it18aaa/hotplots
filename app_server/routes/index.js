var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Hot Plots!' });
// });

// const homepageController = (req, res) => {
//   res.render('index', {title: 'Hot Plots!'});  
// };

router.get('/', ctrlMain.index);

module.exports = router;
