clothesApp.controller('createListsCtrl', function ($scope) {
    $scope.createFooter = (function () {
        $scope.footerLists = [
            "Store locator", "Gift cards", "Size guide", "About us", "Support"
        ];
        $scope.footerListsRight = [
            "Custom Service", "Track my Order", "Return policy", "Shopping & delivery", "Contact us", "Careers"
        ];
        $scope.bottomList = [
            "Legal notice", "Privacy policy", "Site map"
        ];
    }());

});


