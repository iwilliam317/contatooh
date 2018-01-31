var app = require('./config/server');

app.listen(3000,function(){
	console.log('Servidor escutando na porta ' , app.get('port'));
});

var home  = require('./app/routes/home')(app);