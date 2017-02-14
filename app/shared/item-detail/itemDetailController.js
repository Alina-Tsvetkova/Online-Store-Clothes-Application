clothesApp.controller('addToCartCtrl', function ($scope) {
    $scope.chooseSize = function ($size) {
        $scope.size = $size;
    };

    $scope.chooseColor = function ($color) {
        $scope.color = $color;
    };

    $scope.addToBag = function ($name, $price, $img, $id, $size, $color, $type, $q) {
        $scope.initializeItemObj = (function () {
            $scope.itemCloth = {};
            $scope.itemCloth.name = $name;
            $scope.itemCloth.price = $price;
            $scope.itemCloth.size = $size;
            $scope.itemCloth.color = $color;
            $scope.itemCloth.img = $img;
            $scope.itemCloth.id = $id + '-' + $color + '-' + $size;
            $scope.itemCloth.quantity = 1;
            $scope.itemCloth.types = $type;
        }());

        $scope.checkOnIDSimilarity = (function () {
            for (var k = 0; k < sessionStorage.length; k++) {
                var key = sessionStorage.key(k);
                var item = JSON.parse(sessionStorage.getItem(key));
                if (item.id == $scope.itemCloth.id) {
                    $scope.itemCloth.quantity = item.quantity;
                    $scope.itemCloth.quantity += $q;
                    sessionStorage.setItem($scope.itemCloth.id, JSON.stringify($scope.itemCloth));
                }
            }
        }());

        $scope.addItemToStorage = (function () {
            sessionStorage.setItem($scope.itemCloth.id, JSON.stringify($scope.itemCloth));
        }());
    }
});
