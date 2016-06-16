angular
	.module( 'app' )
	.controller('DataCtrl', function DataCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );

		$scope.chartConfig = {
			"options": {
				"chart": {
					"type": "line"
				},
				"plotOptions": {
					"series": {
						"stacking": "normal"
					}
				}
			},
			"series": [
				{
					"data": [
						-10,
						13,
						9,
						7,
						5,
						18,
						9,
						7,
						19,
						12
					],
					"id": "series-4"
				}

			],
			"title": {
				"text": "Hello"
			},
			"credits": {
				"enabled": false
			},
			"loading": false,
			"size": {
				// width:800
			},

			yAxis: {

				plotLines: [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
					color: 'red',
					dashStyle: 'LongDashDot', //Dash,Dot,Solid,默认Solid
					width: 1.5,
					value: 10,  //y轴显示位置
					zIndex: 5
				}]

			},

			func: function (chart) {
				$scope.$evalAsync(function () {
					chart.reflow();
				});
			}
		}

		$scope.chartConfig2 = {
			"options": {
				"chart": {
					"type": "line"
				},
				"plotOptions": {
					"series": {
						"stacking": "normal"
					}
				}
			},
			"series": [
				{
					"data": [
						-10,
						13,
						9,
						7,
						5,
						18,
						9,
						7,
						19,
						12
					],
					"id": "series-4"
				}

			],
			"title": {
				"text": "Hello"
			},
			"credits": {
				"enabled": false
			},
			"loading": false,
			"size": {
				// width:800
			},

			yAxis: {

				plotLines: [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
					color: 'red',
					dashStyle: 'LongDashDot', //Dash,Dot,Solid,默认Solid
					width: 1.5,
					value: 10,  //y轴显示位置
					zIndex: 5
				}]

			},

			func: function (chart) {
				$scope.chart2 = chart
				$scope.$evalAsync(function () {
					chart.reflow();
				});
			}
		}

		$scope.tt = function (){
			$timeout(function(){
				$scope.$evalAsync(function () {
					$scope.chart2.reflow();
				});
			},100)

		}


	});
