const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get('/recipes', function(req, res, next) {

	 Recipe.find({})
	 .then(function(recipes) {
	 res.send(recipes);
	 })
})

router.post('/recipes', function(req, res, next) {

	Recipe.create(req.body)
		.then(function(recipe) {
			res.send(recipe)
		})
	// var ninja = new Ninja(req.body);
	// ninja.save();

});

// router.put('/ninjas/:id', function(req, res, next) {
// 	Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
// 		.then(function() {
// 			Ninja.find(function(err, ninja) {
// 				if (err) return console.error(err);
// 				res.send(ninja);
// 			})
// 		})
// 		.catch(next);
// })

// router.delete('/ninjas/:id', function(req, res, next) {

// 	Ninja.findByIdAndRemove({ _id: req.params.id })
// 		.then(function(ninja) {
// 			res.send(ninja);
// 		})
// 		.catch(next);
// })

module.exports = router;