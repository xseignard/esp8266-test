const mongoose = require('mongoose');

const Measure = mongoose.model('Measure', {
	name: String,
	values: mongoose.Mixed,
	date: { type: Date, default: Date.now },
});

module.exports = Measure;
