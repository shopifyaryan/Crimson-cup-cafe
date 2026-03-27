document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});


