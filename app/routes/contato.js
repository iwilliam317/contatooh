module.exports = function(application){
	application.get('/contatos', function(req, res){
		application.app.controllers.contato.listaContatos(application, req, res);
	})
}