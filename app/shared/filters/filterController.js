var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];

        if (result.indexOf(value) == -1) {
            result.push(value);
        }

    }
    return result;
};

clothesApp.controller('filterCtrl', function ($scope, $http, filterFilter) {

    $scope.initializeContForFilters = (function () {
        $scope.selectedStyles = {};
        $scope.selectedTypes = {};
        $scope.selectedColors = {};
        $scope.selectedBrands = {};
        $scope.selectedSizes = {};
        $scope.selectedPrices = {};
        $scope.items = [];
    }());

    $scope.getData = (function () {
        $http.get('clothes.json').success(function ($data) {
            $scope.allItems = $data;
            $scope.womanClothesRender = [];
            $scope.accessoriesRender = [];
            $scope.handbagsRender = [];
            $scope.menRender = [];
            $scope.itemsArr = [];
            $scope.items = [];

            for (var i = 0; i < $scope.allItems.length; i++) {
                if ($scope.allItems[i]["category"] === "clothes") {
                    $scope.womanClothesRender.push($scope.allItems[i]);
                }
                else if ($scope.allItems[i]["category"] === "accessories") {
                    $scope.accessoriesRender.push($scope.allItems[i]);
                    $scope.itemsArr = $scope.accessoriesRender.slice();
                }
                else if ($scope.allItems[i]["category"] === "bag") {
                    $scope.handbagsRender.push($scope.allItems[i]);
                    $scope.itemsArr = $scope.handbagsRender.slice();
                }
                else if ($scope.allItems[i]["category"] === "men") {
                    $scope.menRender.push($scope.allItems[i]);
                    $scope.itemsArr = $scope.menRender.slice();
                }
            }

            if (window.location.hash === '#/Handbags') {
                $scope.itemsArr = $scope.handbagsRender.slice();
                $scope.items = $scope.handbagsRender.slice();
            }
            else if (window.location.hash === '#/Men') {
                $scope.itemsArr = $scope.menRender.slice();
                $scope.items = $scope.menRender.slice();
            }
            else if (window.location.hash === '#/Accessories') {
                $scope.itemsArr = $scope.accessoriesRender.slice();
                $scope.items = $scope.accessoriesRender.slice();
            }
            else if (window.location.hash === '#/Women') {
                $scope.itemsArr = $scope.womanClothesRender.slice();
                $scope.items = $scope.womanClothesRender.slice();
            }
        });
    }());


    $scope.$watch(function () {
        return {
            items: $scope.items,
            selectedStyles: $scope.selectedStyles,
            selectedTypes: $scope.selectedTypes,
            selectedColors: $scope.selectedColors,
            selectedBrands: $scope.selectedBrands,
            selectedSizes: $scope.selectedSizes,
            selectedPrices: $scope.selectedPrices
        }
    }, function (value) {
        var selected;

        $scope.stylesGroup = uniqueItems($scope.items, 'styles');
        var filteredStyles = [];
        selected = false;
        for (var j in $scope.items) {
            var p = $scope.items[j];
            for (var i in $scope.selectedStyles) {
                if ($scope.selectedStyles[i]) {
                    selected = true;
                    if (i == p.styles) {
                        filteredStyles.push(p);
                        break;
                    }
                }
            }
        }
        if (!selected) {
            filteredStyles = $scope.items;
        }

        $scope.typesGroup = uniqueItems(filteredStyles, 'types');
        var filteredTypes = [];
        selected = false;
        for (var j in filteredStyles) {
            var p = filteredStyles[j];
            for (var i in $scope.selectedTypes) {
                if ($scope.selectedTypes[i]) {
                    selected = true;
                    if (i == p.types) {
                        filteredTypes.push(p);
                        break;
                    }
                }
            }
        }
        if (!selected) {
            filteredTypes = filteredStyles;
        }


        $scope.pricesGroup = uniqueItems(filteredTypes, 'prices');
        var filteredPrices = [];
        selected = false;
        for (var j in filteredTypes) {
            var p = filteredTypes[j];
            for (var i in $scope.selectedPrices) {
                if ($scope.selectedPrices[i]) {
                    selected = true;
                    if (i == p.prices) {
                        filteredPrices.push(p);
                        break;
                    }
                }
            }
        }
        if (!selected) {
            filteredPrices = filteredTypes;
        }

        $scope.brandsGroup = uniqueItems(filteredPrices, 'brands');
        var filteredBrands = [];
        selected = false;
        for (var j in filteredPrices) {
            var p = filteredPrices[j];
            for (var i in $scope.selectedBrands) {
                if ($scope.selectedBrands[i]) {
                    selected = true;
                    if (i == p.brands) {
                        filteredBrands.push(p);
                        break;
                    }
                }
            }
        }
        if (!selected) {
            filteredBrands = filteredPrices;
        }

        $scope.filteredItems = filteredBrands;
        console.log($scope.filteredItems);

    }, true);


    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true);
});

clothesApp.filter('count', function () {
    return function (collection, key) {
        var out = "test";
        for (var i = 0; i < collection.length; i++) {
            //console.log(collection[i].pants);
            //var out = myApp.filter('filter')(collection[i].pants, "42", true);
        }
        return out;
    }
});


clothesApp.filter('groupBy',
    function () {
        return function (collection, key) {
            if (collection === null) return;
            return uniqueItems(collection, key);
        };
    });



