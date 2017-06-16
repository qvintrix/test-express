const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create recipe schema & model
const RecipeSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title Field is required']
	},
	description: {
		type: String,
		required: [true, 'Description Field is required']
	},
	photoUrl: {
		type: String,
		required: [true, 'Photo Field is required']
	},
	ingredients: {
		type: [],
		required: [true, 'Ingredients Field is required']
	},
	instruction: {
		type: String,
		required: [true, 'Instruction Field is required']
	}
})

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;