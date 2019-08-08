var Sequelize = require('sequelize');
var db = require('../db/connection');

var Items = db.define('EasyRider', {
	ItemID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	ArtistName: Sequelize.STRING,
	DOSConact: Sequelize.STRING,
	DOSEmail: Sequelize.STRING,
	Stage: Sequelize.STRING,
	Item: Sequelize.STRING
});

module.exports = EasyRider;
