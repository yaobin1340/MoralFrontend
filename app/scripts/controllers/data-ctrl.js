angular
	.module( 'app' )
	.controller('DataCtrl', function DataCtrl( $scope, $injector, $rootScope, $modal, sweetAlert, notify) {
		var $http = $injector.get( '$http' );
		var $config = $injector.get( '$config' );
		var $timeout = $injector.get( '$timeout' );
		var $session = $injector.get('$session');
		var $location = $injector.get('$location');
		var $state = $injector.get( '$state' );


        $scope. chartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'spline',
                    backgroundColor: 'rgba(255,255,255,0)',
                    style : {
                        fontSize:'',
                        color:'#006cee',
                        padding:'8px 0 0 0',
                        margin:'0'
                    }
                },
                title: {
                    text: 'PM2.5'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },

           //size (optional) if left out the chart will default to size of the div or something sensible.
           //size: {
           //     width:650,
           //    height: 300
           //}

            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
            xAxis: {
                categories: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00','07:00', '08:00', '09:00', '10:00','11:00', '12:00', '13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00']
            },
            yAxis: {
                title: {
                    text: 'ug/m³'
                },
                plotLines: [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: 'red',
                    dashStyle: 'shortDot', //Dash,Dot,Solid,默认Solid
                    width: 1,
                    value: 22,  //y轴显示位置
                    zIndex: 5
                }]
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal highcharts series options.
            series: [{
                name: 'PM2.5',
                data:[
                    5,8,2,1,10,11,12,18,25,11,22,4,1,15,4,26,4,17,19,2,4,4,7,15
                ]
            }],

            //Title configuration (optional)
            //Boolean to control showng loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,

            //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
            useHighStocks: false,

            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };

	});
