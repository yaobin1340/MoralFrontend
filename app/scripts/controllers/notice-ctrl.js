angular
	.module( 'app' )
	.controller('NoticeCtrl', function NoticeCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );

        $scope.showSelect = 'notice'
        $scope.openModal_notice01 = function () {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_notice01.html',
                controller: ModalInstanceCtrl,
            });
        };

        $scope.openModal_notice02 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_notice02.html',
                controller: ModalInstanceCtrl,
                size:size
            });
        };

        $scope.openModal_notice03 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_notice03.html',
                controller: ModalInstanceCtrl,
                size:size
            });
        };

        $scope.openModal_notice04 = function () {
            sweetAlert.swal({
                    title: "要删除这条通知吗?",
                    text: "被删除的通知将同时从接收通知的用户列表中删除!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "删除",
                    cancelButtonText: "保留",
                    closeOnConfirm: false,
                    closeOnCancel: false },
                function (isConfirm) {
                    if (isConfirm) {
                        sweetAlert.swal("删除!", "通知已删除", "success");
                    } else {
                        sweetAlert.swal("取消", "通知继续保留 :)", "error");
                    }
                });
        };

        function ModalInstanceCtrl ($scope, $modalInstance) {
            $scope.showSelect = 'notice'

            $scope.notices = ['ns0g3203jf','ns0gf203jf','nsag3203jf']

            $scope.send = function () {
                $modalInstance.close();
                notify({ message: '发布成功', classes: 'alert-success', templateUrl:'views/notification/notify.html'});
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

        $scope.summernoteOpt = {
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ]
        };


    });
