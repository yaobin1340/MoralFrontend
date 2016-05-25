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
                        sweetAlert.swal("删除!", "您选中的设备已删除.", "success");
                    } else {
                        sweetAlert.swal("取消", "您的设备已继续保留 :)", "error");
                    }
                });
    	}

        /**
         * Data for Doughnut chart
         */
        $scope.doughnutData = [
            {
                value: 20,
                color:"#62cb31",
                highlight: "#57b32c",
                label: "App"
            },
            {
                value: 120,
                color: "#91dc6e",
                highlight: "#57b32c",
                label: "Software"
            },
            {
                value: 100,
                color: "#a3e186",
                highlight: "#57b32c",
                label: "Laptop"
            }
        ];

        /**
         * Options for Doughnut chart
         */
        $scope.doughnutOptions = {
            segmentShowStroke : true,
            segmentStrokeColor : "#fff",
            segmentStrokeWidth : 1,
            percentageInnerCutout : 45, // This is 0 for Pie charts
            animationSteps : 100,
            animationEasing : "easeOutBounce",
            animateRotate : true,
            animateScale : false
        };

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
