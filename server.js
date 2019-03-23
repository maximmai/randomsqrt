const express = require('express');
const app = express();
const port = 3000;
const os = require('os');

function randomSqrtSum(){
	var s = 0;
	for(var i=0; i <= 1000000; i++) {
		s = s + Math.sqrt(Math.random() * 1000);
	}
	return s;
}


app.get('/test', (req, res) => res.send('Hello World! ' + randomSqrtSum()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
