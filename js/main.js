$(document).ready(function () {

    // For adding a shadow to navbar on scroll
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

    // Smooth scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // For switching the active links in navbar
    $(window).scroll(function () {
        var scrollBarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffest = $(this.hash).offset().top;
            if (sectionOffest <= scrollBarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    // Generating the year for footer
    document.getElementById('year').innerHTML = new Date().getFullYear();
});