angular
	.module( 'app' )
	.controller('ManagementCtrl', function ManagementCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );


        $scope.openModal_ma01 = function () {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_ma01.html',
                controller: ModalInstanceCtrl,
            });
        };

        $scope.openModal_ma02 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_ma02.html',
                controller: ModalInstanceCtrl,
                size:size
            });
        };

        $scope.openModal_ma03 = function () {
            sweetAlert.swal({
                    title: "要删除此用户信息吗?",
                    text: "被删除的用户信息将XXXX!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "删除",
                    cancelButtonText: "保留",
                    closeOnConfirm: false,
                    closeOnCancel: false },
                function (isConfirm) {
                    if (isConfirm) {
                        sweetAlert.swal("删除!", "用户信息已删除.", "success");
                    } else {
                        sweetAlert.swal("取消", "用户信息继续保留 :)", "error");
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
