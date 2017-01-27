clothesApp.controller('draggableSliderCtrl', function ($scope) {
    $containerForDrag = $('.additional-items')[0];
    $draggableElem = $('.additionalItemsList')[0];

    $draggableElem.onmousedown = function (e) {

        var elemCoords = getElemCoords($draggableElem);
        var move_on_X = e.pageX - elemCoords.left;

        var containerCoords = getElemCoords($containerForDrag);

        document.onmousemove = function (e) {
            var move_coord = e.pageX - move_on_X - containerCoords.left;

            var edge = $containerForDrag.offsetWidth - $draggableElem.offsetWidth;
            if (move_coord > edge) {
                move_coord = edge + 40;
            }
            console.log(move_coord);
            if (move_coord < -800) {
                move_coord = -800;
            }
            $draggableElem.style.left = move_coord + 'px';
        };

        document.onmouseup = function () {
            document.onmousemove = null;
        }
    };

    $draggableElem.ondragstart = function () {
        return false;
    };

    function getElemCoords(element) {
        var coords = element.getBoundingClientRect();

        return {
            top: coords.top,
            left: coords.left
        }
    }
});