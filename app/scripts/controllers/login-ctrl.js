angular
	.module( 'app' )
	.controller('LoginCtrl', function LoginCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );

		$scope.openModal_login = function () {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal/modal_login.html',
                controller: ModalInstanceCtrl
			});
    	};

        function ModalInstanceCtrl ($scope, $modalInstance) {
            $scope.send = function () {
                $modalInstance.close();
                notify({ message: '发送成功', classes: 'alert-success', templateUrl:'views/notification/notify.html'});
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

		$scope.removeDog = function()
		{
			alert('removeDog');
			reportStatus(7);
		}

		//Callback function, if the dog still exists the function will be called.
		$scope.insertDog = function()
		{
			alert('insertDog');
			window.location.href = "Login.php";
		}


	});
