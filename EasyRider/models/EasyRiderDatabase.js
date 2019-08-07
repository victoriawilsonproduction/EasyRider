var Sequelize = require('sequelize');
var db = require('../db/connection');

var EasyRider = db.define('EasyRider', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	ArtistName: Sequelize.STRING,
	DOSConact: Sequelize.STRING,
	DOSEmail: Sequelize.STRING,
	Stage: Sequelize.STRING
});

module.exports = EasyRider;


// var Sequelize = require('sequelize');
// var db = require('../db/connection');

// var Store = db.define('store', {
// 	id: {
// 		type: Sequelize.INTEGER,
// 		primaryKey: true
// 	},
// 	store_name: Sequelize.STRING,
// 	mall_entrance: Sequelize.STRING,
// 	mall_location: Sequelize.STRING,
// 	category: Sequelize.STRING
// });

// module.exports = Store;

