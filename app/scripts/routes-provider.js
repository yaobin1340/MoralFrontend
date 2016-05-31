angular
    .module( 'routes', [] )
    .provider( '$routes', function $routesProvider()
    {
        this.routes = {};

        this.routes['login'] = {
            url: '/login',
            templateUrl: 'views/common_app/login.html',
            data: {
                pageTitle: 'Dashboard'
            }
            // controller: 'LoginCtrl'
        };

        this.routes['equipment'] = {
            url: '/equipment',
            templateUrl: 'views/equipment.html',
            data: {
                pageTitle: 'equipment'
            },
            controller: 'EquipmentCtrl'
        };

        this.routes['management'] = {
            url: '/management',
            templateUrl: 'views/management.html',
            data: {
                pageTitle: 'management'
            },
            controller: 'ManagementCtrl'
        };

        this.routes['unusual'] = {
            url: '/unusual',
            templateUrl: 'views/unusual.html',
            data: {
                pageTitle: 'unusual'
            },
            controller: 'UnusualCtrl'
        };

        this.routes['data'] = {
            url: '/data',
            templateUrl: 'views/data.html',
            data: {
                pageTitle: 'data'
            },
            controller: 'DataCtrl'
        };

        this.routes['notice'] = {
            url: '/notice',
            templateUrl: 'views/notice.html',
            data: {
                pageTitle: 'notice'
            },
            controller: 'NoticeCtrl'
        };


        this.routes['dashboard'] = {
            url: "/dashboard",
            templateUrl: "views/dashboard.html"
            // controller: 'LoginCtrl'
        };

        // this.routes['main'] = {
        //     url: '/',
        //     abstract: true,
        //     templateUrl: 'views/main.html',
        //     controller: 'MainCtrl'
        // };
        //
        // this.routes[ 'main.home' ] =
        // {
        //     url: 'home',
        //     title: 'Home',
        //     templateUrl: 'views/home.html',
        //     controller: 'HomeCtrl'
        // };

        //this.routes[ 'main.checkout' ] =
        //{
        //    url: 'checkout',
        //    title: 'Checkout',
        //    templateUrl: 'views/checkout.html',
        //    controller: 'CheckoutCtrl'
        //};
        //
        //this.routes[ 'main.profile' ] =
        //{
        //    url: 'profile',
        //    title: 'Profile',
        //    templateUrl: 'views/profile.html',
        //    controller: 'ProfileCtrl'
        //};
        //
        //this.routes[ 'main.profile.like' ] =
        //{
        //    url: '/like',
        //    title: 'Profile',
        //    templateUrl: 'views/shareViews/dishList.html',
        //    controller: 'ProfileLikeCtrl'
        //};
        //
        //this.routes[ 'main.profile.list' ] =
        //{
        //    url: '/list',
        //    title: 'Profile',
        //    templateUrl: 'views/shareViews/list.html',
        //    controller: 'ProfileListCtrl'
        //};
        //
        //this.routes[ 'main.profile.listDetail' ] =
        //{
        //    url: '/list/:id',
        //    title: 'List detail',
        //    templateUrl: 'views/shareViews/listDetail.html',
        //    controller: 'ProfileListDetailCtrl'
        //};
        //
        //this.routes[ 'main.profile.history' ] =
        //{
        //    url: '/history',
        //    title: 'Profile',
        //    templateUrl: 'views/shareViews/history.html',
        //    controller: 'ProfileLikeCtrl'
        //};
        //
        //this.routes[ 'main.restaurants' ] =
        //{
        //    url: 'restaurants',
        //    title: 'Restaurants',
        //    templateUrl: 'views/restaurants.html',
        //    controller: 'RestaurantCtrl'
        //};
        //
        //this.routes['main.restaurantDetail'] = {
        //    url: 'restaurants/:id',
        //    title: 'Restaurants Dish',
        //    templateUrl: 'views/restaurantDetail.html',
        //    controller: 'RestaurantDetailCtrl'
        //};
        //
        //this.routes['main.restaurantDetail.dishes'] = {
        //    url: '/dishes',
        //    title: 'Restaurants Dishes',
        //    templateUrl: 'views/shareViews/dishList.html',
        //    controller: 'RestaurantDishesCtrl'
        //};
        //
        //this.routes['oauth'] = {
        //    url : '/oauth',
        //    templateUrl : 'views/oauth.html',
        //    controller : 'OAuthCtrl'
        //};

        this.$get = function()
        {
            return( this.routes );
        };
    }
);