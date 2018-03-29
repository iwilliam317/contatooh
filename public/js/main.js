var app = angular.module('contatooh', ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider
    // index.html#!/contatos
    .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController' 
    })
});