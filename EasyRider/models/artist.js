var Sequelize = require('sequelize');
var db = require('../db/connection');

var Artist = db.define('EasyRider', {
	ArtistID: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	ArtistName: Sequelize.STRING,
	DOSConact: Sequelize.STRING,
	DOSEmail: Sequelize.STRING,
	DOSPhone: Sequelize.STRING,
	ExtraNotes: Sequelize.STRING,
	// StageID: Stage.belongsTo(StageName, {as: 'StageName'}) // Adds roleId to user rather than userRoleId

	// User.belongsTo(UserRole, {as: 'role'}); // Adds roleId to user rather than userRoleId
});


module.exports = EasyRider;
