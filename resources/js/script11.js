$('.slider11').slick({
    dots: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow:'<i class="fal fa-long-arrow-left my-arrow left-arrow-slider11"></i>',
    nextArrow:'<i class="fal fa-long-arrow-right my-arrow right-arrow-slider11"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});

