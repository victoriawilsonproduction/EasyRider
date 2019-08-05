var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EasyRider' });
});

// GET EasyRider page
router.get('/EasyRider', function(req, res, next) {
  res.render('EasyRider', { title: 'EasyRider' });
});

// GET About page
router.get('/About', function(req, res, next) {
  res.render('aboutme', { title: 'About Us' });
});


/* CSS through Bootstrap */
router.get('/bootstrap', function(req, res, next){
	res.sendFile('../node_modules/bootstrap/dist/css/bootstrap.css')
});


module.exports = router;
