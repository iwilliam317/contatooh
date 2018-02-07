var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('port', 3000);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('method-override')()) 

consign()
	.include('./app/routes')
	.then('./app/controllers')
	.into(app)

app.set('view engine' ,  'ejs');
app.set('views' , './app/views');

module.exports = app;

