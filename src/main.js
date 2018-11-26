const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

app.post('/api', (req, res) => {
	console.log(req.body);
	res.status(201).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
