var express = require('express');
var router = express.Router();

// Router Controllers index module
var controllers = require('../controllers/index.js');

/* Controller http GET method handling */
router.get('/:resource', (req, res, next) => {
	// Check for valid controller request
	var resource = req.params.resource;
	var controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request' + resource
		})
		return
	}
	// Perform controller GET http method
	controller.find(req.query, (err, results) => {
		if (err) {
			res.json({
				confirmation: 'Not Found',
				message: err
			})
			return
		}
		// Respond with successful results
		res.json({
			confirmation: 'success',
			results: results
		})
	})
});

/* Controller:ID http GET method handling */
router.get('/:resource/:id', (req, res, next) => {
	// Check for valid controller request
	var resource = req.params.resource
	var id = req.params.id
	var controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource
		})
		return
	}

	// Perform controller GET with ID http method
	controller.findById(id, (err, result) => {
		if (err) {
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}

		// Successful GET http method request response
		res.json({
			confirmation: 'success',
			result: result
		})
	})
});

/* Controller HTTP POST method handling */
router.post('/:resource', (req, res, next) => {
	// Check for valid controller resource request
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource
		})
		return
	}

	// Create signup data presented in signup form
	controller.create(req.body, (err, results) => {
		if (err) {
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}

		// Successful resource response
		res.json({
			confirmation: 'success',
			message: result
		})
	})
});

module.exports = router