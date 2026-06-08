import { getSectionOffset } from "@utils/section";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

const categorySwiper = new Swiper(".category-pill-list", {
  modules: [Navigation],

  loop: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesOffsetAfter: getSectionOffset(".category-pill-list"),
  slidesOffsetBefore: getSectionOffset(".category-pill-list"),
  navigation: {
    nextEl: ".category-pill-list__nav-next",
    prevEl: ".category-pill-list__nav-prev",
  },

  breakpoints: {
    1024: {
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },
  },
});
