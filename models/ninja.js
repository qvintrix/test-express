const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create geolocation schema
const geoSchema = new Schema({
	type: {
		type: String,
		default: 'Point'
	},
	coordinates: {
		type: [Number],
		index: '2dsphere'
	}
})

// create ninja schema & model
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name Field is required']
	},
	visible: {
		type: Boolean,
		default: false
	},
	geometry: geoSchema
})

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;