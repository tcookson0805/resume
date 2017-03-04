const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

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

const USERNAME = process.env.USERNAME || CONFIG_USERNAME;
const PASSWORD = process.env.PASSWORD || CONFIG_PASSWORD;
const EMAIL = process.env.EMAIL || CONFIG_EMAIL;

console.log('process.env.PORT', process.env.PORT);

// const smtpTransporter = nodemailer.createTransport(smtpTransport({
// 	service: 'gmail',
// 	host: 'smtp.gmail.com',
// 	port: PORT,
// 	auth: {
// 		user: USERNAME,
// 		pass: PASSWORD
// 	}d
// }));

const smtpTransporter = nodemailer.createTransport(smtpTransport('smtps://' + USERNAME + '%40gmail.com:' + PASSWORD + '@smtp.gmail.com'))
const FROM = USERNAME + '@gmail.com';

app.get('/send:something', function(req, res) {

	let message = '<div><b>Sender Name: </b>' + req.query.name +'</div><div><b>Sender Email: </b>' + req.query.email + '</div><br /><div>' + req.query.message + '</div>'

	let mailOptions = {
		to: EMAIL,
		from: FROM,
		subject: req.query.subject,
		html: message
	}
		console.log('here')
		console.log(mailOptions);

	smtpTransporter.sendMail(mailOptions, function(error, response) {
		
		console.log('inside .sendMail');
		console.log('response', response);
		console.log('error', error)
		if(error) {
			console.log(error);
			res.end('error')
		} else {
			console.log("message sent");
			console.log(response);
			res.end("sent");
		}
	});


});



app.listen(PORT, function() {
	console.log("listening on port: " + PORT);
});