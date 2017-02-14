clothesApp.controller('formOrderCtrl', function ($scope) {
    $scope.submitOrder = function () {
        var allInputs = document.getElementsByClassName('field');
        var count = 0;
        for (var k = 0; k < allInputs.length; k++) {
            if (allInputs[k].value !== '') {
                count++;
            }
        }
        if (count === 3) {
            sessionStorage.clear();
            window.location.hash = '/order-done';

        }
    };
});