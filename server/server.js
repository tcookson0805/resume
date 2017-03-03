const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function (req, res) {
	res.sendFile('index.html')
});


if(process.env.NODE_ENV !== 'production') {
	var CONFIG_USERNAME = require('../config/email').CONFIG_USERNAME;
	var CONFIG_PASSWORD = require('../config/email').CONFIG_PASSWORD;
	var CONFIG_EMAIL = require('../config/email').CONFIG_EMAIL;
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const USERNAME = process.env.USERNAME || CONFIG_USERNAME;
const PASSWORD = process.env.PASSWORD || CONFIG_PASSWORD;
const EMAIL = process.env.EMAIL || CONFIG_EMAIL;


const smtpTransport = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: USERNAME,
		pass: PASSWORD
	}
});

app.get('/send', function(req, res) {

	let message = '<div><b>Sender Name: </b>' + req.query.name +'</div><div><b>Sender Email: </b>' + req.query.email + '</div><br /><div>' + req.query.message + '</div>'

	let mailOptions = {
		to: EMAIL,
		from: req.query.name,
		subject: req.query.subject,
		html: message
	}

	smtpTransport.sendMail(mailOptions, function(error, response) {
		if(error) {
			console.log(error);
			res.end('error')
		} else {
			console.log("message sent");
			res.end("sent");
		}
	});
});



app.listen(PORT, function() {
	console.log("listening on port: " + PORT);
});