var Sequelize = require('sequelize');
 
var db = new Sequelize('null', 'null', 'null', {
	dialect: 'sqlite',
	storage: 'db/EasyRider.db',
	define: {
		timestamps: false
	},
});

module.exports = db;

