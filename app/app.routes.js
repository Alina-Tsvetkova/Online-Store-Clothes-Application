clothesApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'app/components/start/start.html',
            controller: 'clothesAppCtrl'
        }).when('/Women', {
            templateUrl: 'app/components/items/items.html',
            controller: 'clothesAppCtrl'
        }).when('/3_shopping_bag', {
            templateUrl: 'app/components/shopping-bag/shoppingBag.html',
            controller: 'clothesAppCtrl'
        }).when('/Accessories', {
            templateUrl: 'app/components/items/items.html',
            controller: 'clothesAppCtrl'
        }).when('/Men', {
            templateUrl: 'app/components/items/items.html',
            controller: 'clothesAppCtrl'
        }).when('/Handbags', {
            templateUrl: 'app/components/items/items.html',
            controller: 'clothesAppCtrl'
        }).when('/clothes/:clothId', {
            templateUrl: 'app/shared/item-detail/itemDetail.html',
            controller: 'clothesAppCtrl'
        }).when('/order', {
            templateUrl: 'app/shared/form-order/formOrder.html',
            controller: 'clothesAppCtrl'
        }).when('/order-done', {
            templateUrl: 'app/components/shopping-bag/shoppingBag.html',
            controller: 'clothesAppCtrl'
        }).when('/Store Locator', {
            templateUrl: 'app/components/store-locator/storeLocator.html',
            controller: 'clothesAppCtrl'
        }).otherwise({
            redirectTo: '/start'
        });
    }]);

