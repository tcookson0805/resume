var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname + '/../client')));


app.get('/', function (req, res) {
	res.send('Hello World')
});

app.listen(PORT, function() {
	console.log("listening on port: " + PORT);
});