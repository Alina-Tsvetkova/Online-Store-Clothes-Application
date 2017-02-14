clothesApp.controller('draggableSliderCtrl', function ($scope) {
    $containerForDrag = $('.additional-items')[0];
    $draggableElem = $('.additionalItemsList')[0];

    $draggableElem.onmousedown = function (e) {
        var elemCoords = getElemCoords($draggableElem);
        var moveonX = e.pageX - elemCoords.left;
        var containerCoords = getElemCoords($containerForDrag);
        document.onmousemove = function (e) {
            var movecoord = e.pageX - moveonX - containerCoords.left;
            var edge = $containerForDrag.offsetWidth - $draggableElem.offsetWidth;
            if (movecoord > edge) {
                movecoord = edge + 40;
            }
            var totalWidth = $('.additional-item')[0].clientWidth * $('.additional-item').length - window.innerWidth;
            if(window.innerWidth > 1300) {
                totalWidth+=65;
            }
            if (movecoord < -totalWidth) {
                movecoord = -totalWidth;
            }
            $draggableElem.style.left = movecoord + 'px';
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

    (function () {
        $draggableElem.addEventListener("touchstart", function (e) {
            var elemCoords = getElemCoords($draggableElem);
            var moveonX =  e.changedTouches[0].pageX - elemCoords.left; // analogue for touch devices

            var containerCoords = getElemCoords($containerForDrag);
            function touchmover(e) {
                var movecoord =  e.changedTouches[0].pageX - moveonX - containerCoords.left;

                var edge = $containerForDrag.offsetWidth - $draggableElem.offsetWidth;
                if (movecoord > edge) {
                    movecoord = edge + 40;
                }
                var totalWidth = $('.additional-item')[0].clientWidth * $('.additional-item').length - window.innerWidth;
                if(window.innerWidth > 1300) {
                    totalWidth+=65;
                }
                if (movecoord < -totalWidth) {
                    movecoord = -totalWidth;
                }
                $draggableElem.style.left = movecoord + 'px';
            }
            $draggableElem.addEventListener('touchmove', touchmover, false)
        }, false);
    }());

});