angular.module( 'app',
    [
        'config',
        'routes',
        'ui.router',                // Angular flexible routing
        'ngSanitize',               // Angular-sanitize
        'ui.bootstrap',             // AngularJS native directives for Bootstrap
        'angular-flot',             // Flot chart
        'angles',                   // Chart.js
        'angular-peity',            // Peity (small) charts
        'cgNotify',                 // Angular notify
        'angles',                   // Angular ChartJS
        'ngAnimate',                // Angular animations
        'ui.map',                   // Ui Map for Google maps
        'ui.calendar',              // UI Calendar
        'summernote',               // Summernote plugin
        'ngGrid',                   // Angular ng Grid
        'ui.tree',                  // Angular ui Tree
        'bm.bsTour',                // Angular bootstrap tour
        'datatables',               // Angular datatables plugin
        'xeditable',                // Angular-xeditable
        'ui.select',                // AngularJS ui-select
        'ui.sortable',              // AngularJS ui-sortable
        'ui.footable',              // FooTable
        'angular-chartist',         // Chartist
        // 'gridshore.c3js.chart',     // C3 charts
        // 'datatables.buttons',       // Datatables Buttons
        // 'angular-ladda',            // Ladda - loading buttons
        'ui.codemirror',             // Ui Codemirror
        'highcharts-ng'
    ]
)
    .config( function config( $injector, $locationProvider)
    {
        var $stateProvider = $injector.get( '$stateProvider' );
        var $urlRouterProvider = $injector.get( '$urlRouterProvider' );
        var $routesProvider = $injector.get( '$routesProvider' );
        var $httpProvider = $injector.get( '$httpProvider' );
        var $config = $injector.get('$configProvider').$get();

        $httpProvider.interceptors.push('AuthInterceptor')
        //$locationProvider.html5Mode(true).hashPrefix('!');

        var routes = $routesProvider.routes;

        angular.forEach( routes, function( value, key )
        {
            $stateProvider.state( key, routes[ key ] );
        });

    })
    .run( function( $injector )
    {
        var $rootScope = $injector.get( '$rootScope' );
        var $state = $injector.get( '$state' );
        var $stateParams = $injector.get( '$stateParams' );
        var $session = $injector.get('$session');

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // $state.go( 'login' );
    })
    .filter('trustHtml', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    })
    .filter('trustAsResourceUrl', function($sce) {
        return function(input) {
            return $sce.trustAsResourceUrl(input);
        };
    })
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    })
