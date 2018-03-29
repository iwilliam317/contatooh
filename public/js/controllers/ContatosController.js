var app = angular.module('contatooh');

 app.controller('ContatosController', function($scope) {
      $scope.total = 0;

      $scope.incrementaUsuario = function(){
        $scope.total ++;
      }

      $scope.decrementaUsuario = function(){

        if ($scope.total > 0){
          $scope.total--;
        }
        else{
          $scope.total = 0;
        }
      }

      $scope.gerarNumero = function(){
        $scope.number = Math.floor(Math.random()*100)
      }
  });

