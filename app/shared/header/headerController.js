clothesApp.controller('addActiveColor', function ($scope) {
    $scope.changeClass = function (value) {
        $scope.classVar = value;
    };
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});