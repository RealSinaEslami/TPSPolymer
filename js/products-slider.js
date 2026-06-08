const swiper = new Swiper(".productsSwiper", {

  slidesPerView: 3,
  spaceBetween: 30,

  loop: true,

  centeredSlides: false,

  grabCursor: true,

  autoHeight: false,

  speed: 900,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 4 },
  },

  on: {

    init: function () {

      equalizeCardHeights();

      animateSlides(this);

    },

    resize: function () {

      equalizeCardHeights();

    },

    slideChangeTransitionStart: function () {

      animateSlides(this);

    },

    slideChange: function () {

      setTimeout(equalizeCardHeights, 50);

    }

  }

});


// =========================
// Slide Animation
// =========================

function animateSlides(swiperInstance) {

  const slides = swiperInstance.slides;

  slides.forEach((slide) => {

    slide.style.transition =
      "transform .6s ease, opacity .6s ease";
  });

  // اسلایدهای فعال
  swiperInstance.visibleSlides.forEach((slide) => {

    slide.style.opacity = "1";

    slide.style.transform = "scale(1)";

  });

}


// =========================
// Equal Height
// =========================

function equalizeCardHeights() {

  const slides = document.querySelectorAll(
    '.productsSwiper .swiper-slide'
  );

  let maxHeight = 0;

  // reset
  slides.forEach(slide => {

    const card = slide.querySelector('.rounded-2xl');

    if (card) {

      card.style.height = 'auto';

      card.style.minHeight = 'auto';

    }

  });

  // find tallest
  slides.forEach(slide => {

    if (!slide.classList.contains('swiper-slide-duplicate')) {

      const card = slide.querySelector('.rounded-2xl');

      if (card) {

        const height = card.offsetHeight;

        if (height > maxHeight)
          maxHeight = height;

      }

    }

  });

  // apply
  if (maxHeight > 0) {

    slides.forEach(slide => {

      if (!slide.classList.contains('swiper-slide-duplicate')) {

        const card = slide.querySelector('.rounded-2xl');

        if (card) {

          card.style.height = maxHeight + 'px';

        }

      }

    });

  }

}


// =========================
// Resize
// =========================

window.addEventListener("resize", () => {
  swiper.update();
});