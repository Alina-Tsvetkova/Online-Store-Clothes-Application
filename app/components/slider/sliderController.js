clothesApp.controller('sliderCtrl', function ($scope) {
    $scope.slide = function ($num) {
        $sliderGallery = $('.gallery')[0];
        $sliderGallery.style.transitionDuration = '1s';
        $sliderGallery.style.marginLeft = -( $('.slide')[0].clientWidth) * $num - 40 + 'px';
    }
});
