module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.home.index(req, res)
	})
}