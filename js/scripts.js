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
    $(".contact-info form").submit(function(event) {
        event.preventDefault();
        var contactName = $("input#contact-name").val();
        var contactEmail = $("input#contact-email").val();
        var contactMessage = $("input#contact-message").val();
        alert(contactName + ", we have recieved your message. Thank you for contacting us.");
    });
});