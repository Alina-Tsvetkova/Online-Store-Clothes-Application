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
            for (var k = 0; k < localStorage.length; k++) {
                var key = localStorage.key(k);
                var item = JSON.parse(localStorage.getItem(key));
                if (item.id == $scope.itemCloth.id) {
                    $scope.itemCloth.quantity = item.quantity;
                    $scope.itemCloth.quantity += $q;
                    localStorage.setItem($scope.itemCloth.id, JSON.stringify($scope.itemCloth));
                }
            }
        }());

        $scope.addItemToStorage = (function () {
            localStorage.setItem($scope.itemCloth.id, JSON.stringify($scope.itemCloth));
        }());
    }
});
