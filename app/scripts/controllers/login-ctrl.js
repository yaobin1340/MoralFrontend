angular
	.module( 'app' )
	.controller( 'LoginCtrl', function LoginCtrl( $scope, $injector, $rootScope) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );


		// $scope.login = function(){
		// 	$http.post($config.api_uri + '/login', $scope.user)
		// 		.success(function(response){
		// 			$session.set('auth', response)
		// 			$session.save()
		// 			$state.go( 'main.home' );
		// 		})
		// 		.error(function(response){
		// 			console.log(response.error)
		// 		});
		// }

	});