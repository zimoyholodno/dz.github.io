import { getSectionOffset } from "@utils/section";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

const swiperSelector = ".swiper-horizontal__swiper";

const swiperOptions: SwiperOptions = {
  modules: [Navigation, Pagination],
  spaceBetween: 10,
  slidesPerView: "auto",
  loop: false,
  slidesOffsetBefore: getSectionOffset(swiperSelector),
  slidesOffsetAfter: 10,
};

const swiper = new Swiper(swiperSelector, swiperOptions);

window.addEventListener("resize", () => {
  swiper.params.slidesOffsetBefore = getSectionOffset(swiperSelector);
});
