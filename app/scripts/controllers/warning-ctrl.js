angular
	.module( 'app' )
	.controller('WarningCtrl', function WarningCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );



    });
