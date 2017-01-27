clothesApp.controller('clothesAppCtrl', function ($scope, $http) {

});

clothesApp.controller('sortCtrl', function ($scope) {
    $scope.sortItems = function (fieldName) {
        $scope.sortField = undefined;
        $scope.reverse = false;
        if ($scope.sortByPrice == 'cheap') {
            if ($scope.sortField === fieldName) {
                $scope.reverse = !$scope.reverse;
            }
            else {
                $scope.sortField = fieldName;
                $scope.reverse = false;
            }
        }
        if ($scope.sortByPrice == 'expensive') {
            if ($scope.sortField === fieldName) {
                $scope.reverse = !$scope.reverse;
            }
            else {
                $scope.sortField = fieldName;
                $scope.reverse = true;
            }
        }
    };
});

clothesApp.controller('clothDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.showDetailedItemInfo = (function () {
        $scope.clothId = $routeParams.clothId;
        $http.get('clothes.json').success(function ($data) {
            $scope.allItems = $data;
            $scope.item = undefined;
            for (var k = 0; k < $scope.allItems.length; k++) {
                if ($scope.allItems[k]["id"] === $scope.clothId) {
                    $scope.item = $scope.allItems[k];
                    $scope.sizes = $scope.item.sizes;
                    $scope.colors = $scope.item.colors;
                }
            }
        });
    }());
}]);