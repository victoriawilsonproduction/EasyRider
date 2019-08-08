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

// GET showtable page
router.get('/ShowTable', function(req, res, next) {
  res.render('showtable', { title: 'Rider List' });
});

/* CSS through Bootstrap */
router.get('/bootstrap', function(req, res, next){
	res.sendFile('../node_modules/bootstrap/dist/css/bootstrap.css')
});
////////////////////////////////////////////////////////////////////////////////////////
var erDatabase = require('../db/connection.js');

router.get('/artist', function(req, res, next){
	erDatabase.findAll().then(function(artist){
		res.render('artist', {artist: artist});
	});
});

router.get('/stage/', function(req, res, next){
	erDatabase.findAll({
		where: {
			stage: req.params.stage
		}
	}).then(function(items){
		res.render('items', {items: items, category: req.params.artist});
	});
});

router.get('/showtable', function(req, res, next){
	erDatabase.findByPk(req.params.id).then(function(artst){
			console.log('artist', artist);

		res.render('showtable', {artist: artist});
	});
});

module.exports = router;
