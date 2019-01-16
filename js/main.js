var Bounce = function () {

    var defaultSettings = {
        selector: '.bounce',
        gravity: 9.81,
        updateSpeed: 1 //In milliseconds
    };

    var element;
    var speedY;
    var timer;
    var position = {
        x: 0,
        y: 0
    };

    var updateElement = function() {
        element.style.marginLeft = position.x + 'px';
        element.style.marginTop = position.y + 'px';
    };

    var move = function(xChange, yChange) {

        position.x += xChange;
        position.y += yChange;

        //If the element reaches the bottom of the parent element reverse the speed
        if(element.parentElement.clientHeight <= position.y + element.clientHeight) {
            speedY = -speedY;
        }

        updateElement();
    };

    var update = function() {
        move(0, speedY);
        speedY += defaultSettings.gravity * (defaultSettings.updateSpeed/1000);
    };

    var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };

    var init = function(selector, settings) {
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultSettings.selector;
        element = document.querySelector(selector);
        speedY = 0;
        timer = setInterval(update, defaultSettings.updateSpeed);
    };

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init
    };
};
