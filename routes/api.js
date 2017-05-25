const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', function(req, res, next) {
	/*
	 Ninja.find({}).then(function(ninjas) {
	 res.send(ninjas);
	 })
	 */
	console.log(req.query);
	Ninja.geoNear({
			type: 'Point',
			coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
		},
		{ maxDistance: 100000, spherical: true })
		.then(function(ninjas) {
			res.send(ninjas);
		})
})

router.post('/ninjas', function(req, res, next) {

	Ninja.create(req.body)
		.then(function(ninja) {
			res.send(ninja)
		})
		.catch(next);
	// var ninja = new Ninja(req.body);
	// ninja.save();

});

router.put('/ninjas/:id', function(req, res, next) {
	Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
		.then(function() {
			Ninja.find(function(err, ninja) {
				if (err) return console.error(err);
				res.send(ninja);
			})
		})
		.catch(next);
})

router.delete('/ninjas/:id', function(req, res, next) {

	Ninja.findByIdAndRemove({ _id: req.params.id })
		.then(function(ninja) {
			res.send(ninja);
		})
		.catch(next);
})

module.exports = router;