var SLIDER = {
    slideBannerIndex: function () {
        if (typeof document.querySelector(".slider-banner_index") === "undefined")
            return;
        const swiperBanner = new Swiper(".slider-banner_index", {
            slidesPerView: 1,
            disableOnInteraction: true,
            speed: 600,
            spaceBetween: 8,
            watchSlidesProgress: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            Loop: true,
        });
    },
    init: function () {
        SLIDER.slideBannerIndex();
    },
};
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        SLIDER.init();
    }, 100);
});