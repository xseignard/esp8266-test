const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/api', (req, res) => {
	console.log(req.body);
	res.status(201).end();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
