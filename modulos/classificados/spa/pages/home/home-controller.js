(function() {
	'use strict';

	angular.module('moduloHomeController',[])

	.controller('homeController', homeController);

	homeController.$inject = ['$http','$rootScope','$scope','TesteService','PARAMS'];

	function homeController($http, $rootScope, $scope, TesteService, PARAMS){

		var vm = this;

		vm.includes = PARAMS.index.includes;

		$http({
			url: "/apirest/admin/categoria",
			method: "GET"
		}).then(function(response){
			vm.listaCategoria = [];

			vm.primeiros = response.data.splice(0,4);
			// vm.listaCategoria = response.data;

			for (var i=0; i<response.data.length;i){
				vm.listaCategoria.push(response.data.slice(i,i+4));
				i +=4;
			}

		});
	}

})();
