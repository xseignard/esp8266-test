const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Measure = require('./measure');

app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/api', async (req, res) => {
	console.log(req.body);
	const m = new Measure(req.body);
	const r = await m.save();
	console.log(r);
	console.log('test');
	res.status(201).end();
});

app.get('/api', async (req, res) => {
	const arr = await Measure.find();
	res.status(200).json(arr);
});

mongoose.connect('mongodb://localhost/ecv-test');

app.listen(port, () => console.log(`Listening on port ${port}!`));
