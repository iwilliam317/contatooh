var express = require('express');
var app = express();
var consign = require('consign');

app.set('port', 3000);
app.use(express.static('./public'));

consign()
	.include('./app/routes')
	.then('./app/controllers')
	.into(app)

app.set('view engine' ,  'ejs');
app.set('views' , './app/views');

module.exports = app;

