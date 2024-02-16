function createSwiper(selector, selectorEl) {
  return new Swiper(selector, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    pagination: {
      el: selectorEl,
      clickable: true
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      },

      500: {
        slidesPerView: 2,
      },
    },
  });
}

const slider1 = createSwiper('.product__swiper', '.product__pagination');
const slider2 = createSwiper('.company__swiper', '.company__pagination');


const slider3 = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 800,

  pagination: {
    el: '.swiper-pagination.review__pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.review__arrow-right',
    prevEl: '.review__arrow-left',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1280: {
      slidesPerView: 3,
    }

  },
})

const slider4 = new Swiper ('.project__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,

  pagination: {
    el: '.swiper-pagination.project__pagination',
    clickable: true
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
})


let galleryThumbs = new Swiper('.type__swiper2', {
  spaceBetween: 50,
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

let galleryTop = new Swiper('.type__swiper', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.review__arrow-right',
    prevEl: '.review__arrow-left',
  },
  pagination: {
    el: '.swiper-pagination.type__pagination',
    clickable: true
  },
  thumbs: {
    swiper: galleryThumbs
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  speed: 1500,
});

galleryThumbs.on('slideChangeTransitionEnd', function () {
  let activeIndex = this.activeIndex;
  galleryTop.slideTo(activeIndex);
  let slides = document.querySelectorAll('.type__swiper .swiper-slide');
  slides.forEach((slide, index) => {
    slide.classList.remove('swiper-slide-visible');
    if (index === activeIndex) {
      slide.classList.add('swiper-slide-visible');
    }
  });
});