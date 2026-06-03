import Swiper from "swiper";

import { Navigation, Thumbs, Pagination, Autoplay } from "swiper/modules";

const petSwiper = new Swiper(".swiper-pet__swiper--similar", {
  modules: [Navigation, Pagination],

  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-pet__nav-next--similar",
    prevEl: ".swiper-pet__nav-prev--similar",
  },
  on: {
    init(swiper) {
      setCustomGap(swiper);
    },
    slideChange(swiper) {
      setCustomGap(swiper);
    },
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    // 1200: {
    //   slidesPerView: 3,
    // },

    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

function setCustomGap(petSwiper: Swiper) {
  petSwiper.slides.forEach((slide) => slide.classList.remove("custom-gap"));
  petSwiper.slides.forEach((slide) => slide.classList.remove("custom-text"));

  const secondSlide = petSwiper.slides[petSwiper.activeIndex + 1];
  const firstSlide = petSwiper.slides[petSwiper.activeIndex];
  if (secondSlide) secondSlide.classList.add("custom-gap");
  if (firstSlide) firstSlide.classList.add("custom-text");
}

const likeSwiper = new Swiper(".swiper-pet__swiper--like", {
  modules: [Navigation, Pagination],

  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-pet__nav-next--like",
    prevEl: ".swiper-pet__nav-prev--like",
  },
  on: {
    init(swiper) {
      setCustomGap(swiper);
    },
    slideChange(swiper) {
      setCustomGap(swiper);
    },
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    // 1200: {
    //   slidesPerView: 3,
    // },

    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
