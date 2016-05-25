angular
	.module( 'app' )
	.controller('EquipmentCtrl', function EquipmentCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
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
		$scope.openModal = function (size) {
			var modalInstance = $modal.open({
				templateUrl: 'views/modal/modal.html',
                controller: ModalInstanceCtrl,
                size:size
			});
    	};
        $scope.openModal3 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal3.html',
                controller: ModalInstanceCtrl,
                size:size
            });
        };

		
		$scope.openModal2 = function () {
            sweetAlert.swal({
                    title: "要删除这个设备吗?",
                    text: "被删除的设备将XXXX!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "删除",
                    cancelButtonText: "保留",
                    closeOnConfirm: false,
                    closeOnCancel: false },
                function (isConfirm) {
                    if (isConfirm) {
                        sweetAlert.swal("删除!", "设备已删除.", "success");
                    } else {
                        sweetAlert.swal("取消", "设备继续保留 :)", "error");
                    }
                });
    	}


        function ModalInstanceCtrl ($scope, $modalInstance) {
            $scope.ok = function () {
                $modalInstance.close();
                notify({ message: '保存成功', classes: 'alert-success', templateUrl:'views/notification/notify.html'});
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };


    });
