//Business (back-end) logic











//User (front-end) logic
$(document).ready(function(){
    $(".product").click(function() {
        $(".product-hidden").toggle();
        $(".product-showing").toggle();
    });
    $(".development").click(function() {
        $(".development-hidden").toggle();
        $(".development-showing").toggle();
    });
    $(".design").click(function() {
        $(".design-hidden").toggle();
        $(".design-showing").toggle();
    });
});