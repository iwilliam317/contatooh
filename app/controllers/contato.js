
module.exports = function(){
	let controller = {};
	let contatos = [
		{_id: 1, nome: 'Vanessa', email: 'vanessa@gmail.com'},
		{_id: 2, nome: 'Fernanda', email: 'fernanda@hotmail.com'},
		{_id: 3, nome: 'Renato', email: 'renato@gmail.com'},
		{_id: 4, nome: 'Tamiris', email: 'tamiris@gmail.com'},
		{_id: 5, nome: 'João', email: 'joao@uol.com.br'}
	]


	controller.listaContatos = function(application, req, res){
		res.json(contatos);
	}

	return controller;
}


