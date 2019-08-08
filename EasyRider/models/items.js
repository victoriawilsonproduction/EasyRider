var Sequelize = require('sequelize');
var db = require('../db/connection');

var Items = db.define('EasyRider', {
	ItemID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	ItemType: Sequelize.STRING,
	Item: Sequelize.STRING,
	ItemBrand: Sequelize.STRING,
	Quanitity: Sequelize.STRING,
	SpecialInstructions: Sequelize.STRING,
	// ArtistID:
	// StageID:
});

module.exports = EasyRider;
