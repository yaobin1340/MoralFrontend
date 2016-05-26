angular
	.module( 'app' )
	.controller('ManagementCtrl', function ManagementCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );


        $scope.showSelect = 'equipment'
        $scope.openModal_ma01 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_ma01.html',
                controller: ModalInstanceCtrl,
                size:size
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
                    title: "要删除用户信息吗?",
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
                        sweetAlert.swal("删除!", "用户信息已删除", "success");
                    } else {
                        sweetAlert.swal("取消", "用户信息继续保留 :)", "error");
                    }
                });
        };

        $scope.openModal_ma04 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_ma04.html',
                controller: ModalInstanceCtrl,
                size:size
            });
        };


        $scope.openModal_ma05 = function () {
            sweetAlert.swal({
                    title: "需要重置密码吗?",
                    text: "重置后的密码将以短信的方式发送至您的手!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "重置",
                    cancelButtonText: "取消",
                    closeOnConfirm: false,
                    closeOnCancel: false },
                function (isConfirm) {
                    if (isConfirm) {
                        sweetAlert.swal("已重置!", "密码已重置，请注意查收短信息", "success");
                    } else {
                        sweetAlert.swal("取消重置", "继续使用原密码 :)", "error");
                    }
                });
        };

        function ModalInstanceCtrl ($scope, $modalInstance) {
            $scope.showSelect = 'equipment'

            $scope.equipments = ['ns0g3203jf','ns0gf203jf','nsag3203jf']

            $scope.ok = function () {
                $modalInstance.close();
                notify({ message: '保存成功', classes: 'alert-success', templateUrl:'views/notification/notify.html'});
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

    });
