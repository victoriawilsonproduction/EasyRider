var express = require('express');
var router = express.Router();
var erDatabase = require('../models/EasyRiderDatabase');

router.get('/', function(req, res, next){
	erDatabase.findAll().then(function(artist){
		res.render('artist', {artist: artist});
	});
});

router.get('/stage/:stage', function(req, res, next){
	erDatabase.findAll({
		where: {
			stage: req.params.stage
		}
	}).then(function(items){
		res.render('items', {items: items, category: req.params.artist});
	});
});

router.get('/:id', function(req, res, next){
	erDatabase.findByPk(req.params.id).then(function(artst){
		res.render('showtable', {artist: artist});
	});
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var Store = require('../models/stores');

// router.get('/', function(req, res, next){
// 	Store.findAll().then(function(stores){
// 		res.render('stores', {stores: stores});
// 	});
// });

// router.get('/category/:category', function(req, res, next){
// 	Store.findAll({
// 		where: {
// 			category: req.params.category
// 		}
// 	}).then(function(stores){
// 		res.render('stores', {stores: stores, category: req.params.category});
// 	});
// });

// router.get('/:id', function(req, res, next){
// 	Store.findByPk(req.params.id).then(function(store){
// 		res.render('show', {store: store});
// 	});
// });

// module.exports = router;