import Swiper from "swiper";

import { Navigation, Thumbs, Pagination, Autoplay } from "swiper/modules";

const blogSwiper = new Swiper(".swiper-blog__swiper", {
  modules: [Navigation, Pagination],
  spaceBetween: 12,
  slidesPerView: 1,
  loop: false,

  navigation: {
    nextEl: ".swiper-blog__nav-next",
    prevEl: ".swiper-blog__nav-prev",
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
