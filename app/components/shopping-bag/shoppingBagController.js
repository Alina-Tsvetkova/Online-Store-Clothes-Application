clothesApp.controller('renderCartCtrl', function ($scope) {

    $scope.checkIfItemsPresent = function () {
        if ($scope.items.length != 0) {
            $('.no-items-title').css('display', 'none');
        }
        console.log(window.location.hash);
        if (window.location.hash == '#/order-done') {
            $('.thankful-title').css('display', 'block');
            $('.no-items-title').css('display', 'none');
        }
    };

    $scope.renderCart = (function () {
        $scope.allItems = localStorage;
        $scope.items = [];
        $scope.totalSum = 0;
        $scope.totalItemsQuantity = 0;
        for (var k = 0; k < localStorage.length; k++) {
            var key = localStorage.key(k);
            var item = JSON.parse(localStorage.getItem(key));
            $scope.items.push(item);
            $scope.quantityOfItems = $scope.items.length;
            $scope.totalSum += Number(item.price) * $scope.items[k].quantity;
            $scope.totalItemsQuantity += $scope.items[k].quantity;
            console.log($scope.items);
        }

        $scope.checkIfItemsPresent();

    }());


    //
    // $http.get('clothes.json').success(function ($data) {
    //     var additionalItems = [];
    //     $scope.allItems = $data;
    //     for (var i = 0; i < $scope.allItems.length; i++) {
    //         for (var k = 0; k < $scope.items.length; k++) {
    //             if ($scope.allItems[i].types == $scope.items[k].types) {
    //                 additionalItems.push($scope.allItems[i]);
    //                 console.log(additionalItems);
    //             }
    //         }
    //     }
    // });

    $scope.orderCart = function () {
        if ($scope.items.length == 0) {
            return;
        }
        else {
            window.location.hash = '/order';
        }

    }

});

clothesApp.controller('removeFromCartCtrl', function ($scope, $route) {
    $scope.removeItemFromCart = function ($key) {
        localStorage.removeItem($key);
        console.log(localStorage);
        $route.reload();
    };

    $scope.emptyBag = function () {
        localStorage.clear();
        $route.reload();
    };
});


