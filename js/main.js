$('.testim__list').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

if (window.innerWidth <= 1024) {
    $('.burger, .menu__item').click(function () {
        $('.burger, .menu, .burger__line').toggleClass('active');
    })
};