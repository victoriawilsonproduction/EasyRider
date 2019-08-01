var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EasyRider' });
});

/* CSS through Bootstrap */
router.get('/bootstrap', function(req, res, next){
	res.sendFile('../node_modules/bootstrap/dist/css/bootstrap.css')
});


module.exports = router;
