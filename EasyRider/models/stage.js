var Sequelize = require('sequelize');
var db = require('../db/connection');

var Stage = db.define('EasyRider', {
	StageID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	StageName: Sequelize.STRING,
});

module.exports = EasyRider;


