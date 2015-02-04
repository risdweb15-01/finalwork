
$(document).ready(function() {


	$('.name').flexslider({
    directionNav : false,
    slideshow: false,
    animation: "slide",
    controlsContainer: ".name",
    start: function(slider) {
    $('.name').click(function(event){
        event.preventDefault();
        slider.flexAnimate(slider.getTarget("next"));
    });
}
});