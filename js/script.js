var left;
var imageWidth;
//var currentImage = 0;
var slider;
var dots;
var navLineWidth;
var navLineBox;
var navBoxWidth;

function init() {

    slider = $('.image_slider');
    var slidesLi = $('.image_slider img');
    imageWidth = $('.image_slider img:first').outerWidth();
    slider.css({"width":(imageWidth * slidesLi.length)});

    $('.image-slider-wrapper').css({"height":jQuery('.image_slider img:first').outerHeight(false)});
    $('.image-slider-wrapper').css({"width":imageWidth});

    navBoxWidth = $('.image-box').outerWidth(false);
    navLineBox = $('.all-images');
    navLineWidth = navigationBox();

    $('.container').css({"width":imageWidth});
    $('.but').click(moveNavBox);
    console.log(navBoxWidth);
}

function navigationBox(){

    var images = $('.all-images li');
    var width = $('.all-images li:last').outerWidth(true);
    navLineBox.css({"width" : width * images.length});

    return width * images.length;
}

function moveNavBox(event){
    var elem = event.target;
    var offset = navLineBox.position();
    left = parseInt(offset.left);

    if (elem.className == "but left"){

        if (left*(-1) < navBoxWidth){
            left = 0;
            navLineBox.animate({"left":left});
            $('.left').css({"opacity":"0.1"});
        }else {
            left = left + navBoxWidth + "px";
            navLineBox.animate({"left": left});
            $('.right').css({"opacity": "0.5"});
        }

    }else if (elem.className == "but right") {

        if ((navLineWidth - (navBoxWidth - left)) < navBoxWidth){
            left = left - (navLineWidth - (navBoxWidth - left));
            navLineBox.animate({"left":left});
            $('.right').css({"opacity":"0.1"});
        }else {
            left = left - navBoxWidth + "px";
            navLineBox.animate({"left": left});
            $('.left').css({"opacity": "0.5"});
        }
    }
}
$(document).ready(init);

