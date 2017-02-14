clothesApp.controller('renderCartCtrl', function ($scope) {

    $scope.checkIfItemsPresent = function () {
        if ($scope.items.length != 0) {
            $('.no-items-title').css('display', 'none');
        }
        if (window.location.hash == '#/order-done') {
            $('.thankful-title').css('display', 'block');
            $('.no-items-title').css('display', 'none');
        }
    };

    $scope.renderCart = (function () {
        $scope.allItems = sessionStorage;
        $scope.items = [];
        $scope.totalSum = 0;
        $scope.totalItemsQuantity = 0;
        for (var k = 0; k < sessionStorage.length; k++) {
            var key = sessionStorage.key(k);

            var item = JSON.parse(sessionStorage.getItem(key));
            if (!(sessionStorage.getItem(key))) {
                return;
            }
            $scope.items.push(item);
            $scope.quantityOfItems = $scope.items.length;
            $scope.totalSum += Number(item.price) * $scope.items[k].quantity;
            $scope.totalItemsQuantity += $scope.items[k].quantity;
        }

        $scope.checkIfItemsPresent();

    }());

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
        sessionStorage.removeItem($key);
        $route.reload();
    };

    $scope.emptyBag = function () {
        sessionStorage.clear();
        $route.reload();
    };
});


