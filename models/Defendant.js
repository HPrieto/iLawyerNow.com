var mongoose = require('mongoose')

var DefendantSchema = new mongoose.Schema({
	firstName: {type: String, default: ''},
	lastName: {type: String, default: ''},
	email: {type: String, default: ''},
	phone: {type: String, default: ''},
	password: {type: String, default: ''},
	created: {type: Date, default: Date.now}
})

module.exports = mongoose.model('DefendantSchema', DefendantSchema)