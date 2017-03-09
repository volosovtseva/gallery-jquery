var left;
var imageWidth;
var currentImage = 0;
var imageNumber;
var slider;
var dots;

function init() {

    slider = jQuery('.image_slider');
    var slidesLi = jQuery('.image_slider img');
    imageNumber = slidesLi.length;
    imageWidth = jQuery('.image_slider img:first').outerWidth();
    console.log(imageWidth);
    slider.css({"width":(imageWidth * imageNumber)});
    var sliderBox = jQuery('.image-slider-wrapper');
    sliderBox.css({"height":jQuery('.image_slider img:first').outerHeight(false)});
    sliderBox.css({"width":imageWidth});

    jQuery('.container').css({"width":imageWidth});

}

jQuery(document).ready(init);

