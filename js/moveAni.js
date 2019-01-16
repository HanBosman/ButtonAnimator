/**
 * Created by Han on 16-1-2019.
 */

var moveAni = (function (selector) {

   var blocks = Array.prototype.slice.call(document.querySelectorAll(selector));

   /**
    * Custom setup for element
    */

   function Design(width, height, color, textcolor) {

       for (i = 0; i < blocks.length; i++) {
           blocks[i].style.color = textcolor;
           blocks[i].style.backgroundColor = color;
           blocks[i].style.width = width;
           blocks[i].style.height = height;

       }
       return this;

   }

    /*
     *
     * When clicked on element move it with personally chosen margins
     *
     */

    function clickAnimate(m1) {

        for (i = 0; i < blocks.length; i++) {

            blocks[i].onclick = function () {
                for (i = 0; i < blocks.length; i++) {
                    blocks[i].style.margin = m1;
                }
            }
        }
        return this;
    }

    /*
     *
     * When clicked on element change the color to your liking
     *
     */

    function clickColor(bg) {

        for (i = 0; i < blocks.length; i++) {

            blocks[i].onclick = function () {
                for (i = 0; i < blocks.length; i++) {
                    blocks[i].style.backgroundColor = bg;
                }
            }
        }
        return this;
    }

      /*
       * returns functions that are accessible from the outside
       */

    return {
        design:Design,
        clickMargin:clickAnimate,
        clickColor:clickColor
    }
});
