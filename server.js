const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// This logs ip address and protocol to log
// app.use((req, res, next) => {
// 	var now = new Date().toString()
// 	var log = `${now}: ${req.method} ${req.url} ${req.ip} ${req.protocol}`
// 	fs.appendFile('server.log', log + '\n', (err) => {});
// 	next();
// });

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase()
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		message: 'Welcome to my website',
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	})
});

app.get('/projects', (req, res) => {
	res.render('project.hbs', {
		pageTitle: 'Projects'	
	})
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`)
});