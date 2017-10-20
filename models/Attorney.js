var mongoose = require('mongoose');

/* Mongoose database schema */
var AttorneySchema = new mongoose.Schema({
	firstName: {type: String, default: ''},
	lastName: {type: String, default: ''},
	email: {type: String, default: ''},
	phone: {type: String, default: ''},
	password: {type: String, default: ''},
	barnumber: {type: String, default: ''},
	created: {type: Date, default: Date.now}
})

module.exports = mongoose.model('AttorneySchema', AttorneySchema)