var express = require('express');
var router = express.Router();
var bootstrap = require('bootstrap');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EasyRider' });
});

/* CSS through Bootstrap */
route.get('/', function(req, res, next){
	res.sendFile('../node_modules/bootstrap/dist/css/bootstrap.css')
});


module.exports = router;
