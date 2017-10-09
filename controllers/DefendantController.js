var Defendant = require('../models/Defendant');

// CRUD
module.exports = {
	find: (params, callback) => {
		Defendant.find(params, (err, defendant) => {
			if (err) {
				callback(err, null)
				return
			}
		})
		callback(null, defendant)
	},
	findById: (id, callback) => {
		Defendant.findById(id, (err, defendant) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, defendant)
		})
	},
	create: (params, callback) => {
		Defendant.create(params, (err, defendant) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, defendant)
		})
	},
	update: (id, params, callback) => {
		Defendant.findByIdAndUpdate(id, params, {new:true}, (err, defendant) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, defendant)
		})
	},
	destroy: (id, callback) => {
		Defendant.findByIdAndRemove(id, (err) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}