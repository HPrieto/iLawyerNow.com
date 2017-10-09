// schema model modules
var Attorney = require('../models/Attorney');

// CRUD
module.exports = {
	find: (params, callback) => {
		Attorney.find(params, (err, attorney) => {
			if (err) {
				callback(err, null)
				return
			}
		})
		callback(null, attorney)
	},
	findById: (id, callback) => {
		Attorney.findById(id, (err, attorney) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, attorney)
		})
	},
	create: (params, callback) => {
		Attorney.create(params, (err, attorney) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, attorney)
		})
	},
	update: (id, params, callback) => {
		Attorney.findByIdAndUpdate(id, params, {new:true}, (err, attorney) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, attorney)
		})
	},
	destroy: (id, callback) => {
		Attorney.findByIdAndRemove(id, (err) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}