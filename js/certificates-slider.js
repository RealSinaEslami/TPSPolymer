new Swiper(".certificatesMobileSwiper", {

    slidesPerView: 1.15,
    centeredSlides: true,

    spaceBetween: 18,

    loop: true,

    speed: 900,

    grabCursor: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".certificatesMobileSwiper .swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".cert-prev",
        prevEl: ".cert-next",
    },

});