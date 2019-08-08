var express = require('express');
var router = express.Router();
var erDatabase = require('../db/connection.js');
var Sequelize = require('sequelize');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EasyRider' });
});

// GET EasyRider page
router.get('/EasyRider', function(req, res, next) {
  res.render('easyrider', { title: 'EasyRider' });
});

// GET About page
router.get('/About', function(req, res, next) {
  res.render('aboutme', { title: 'About Us' });
});

/* CSS through Bootstrap */
router.get('/bootstrap', function(req, res, next){
	res.sendFile('../node_modules/bootstrap/dist/css/bootstrap.css')
});

router.get('/showtable', function(req, res, next){
	erDatabase.query("SELECT ArtistName, DOSContact, DOSPhone, DOSEmail, ExtraNotes, Stage.StageName FROM `Artist` LEFT JOIN Stage ON Artist.StageID = Stage.StageID" , { type: Sequelize.QueryTypes.SELECT})
		.then(artist => {
		console.log('artist', artist);
	    res.render('showtable', {title: 'Rider', artist:artist});
	})
});



module.exports = router;
