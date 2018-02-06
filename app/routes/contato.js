module.exports = function(application){
	application.get('/contatos', function(req, res){
		application.app.controllers.contato.listaContatos(application, req, res);
	})

	//via parâmetro
	application.get('/contatos/:id', function(req, res){
		application.app.controllers.contato.obtemContato(application, req, res);
	});

	//via query
	//application.get('/contato', function(req, res){
	//	application.app.controllers.contato.obtemContato(application, req, res);
	//});
}