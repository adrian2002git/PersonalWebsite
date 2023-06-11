
    $(document).ready(function() {
    $(window).scroll(function() {
        myFunction();
    });

    function myFunction() {
    var navbar = $('header');
    var sticky = navbar.offset().top;
    var scrollPosition = $(window).scrollTop()+100;
    console.log("Window:")
    console.log($(window).scrollTop())
        console.log("Sticky:")
        console.log(sticky)
    if ($(window).scrollTop() >= sticky) {
    navbar.addClass('fixed-nav');

} else {
    navbar.removeClass('fixed-nav');
}
        if (scrollPosition <= 400) {
            navbar.removeClass('fixed-nav');
        }
}
});
