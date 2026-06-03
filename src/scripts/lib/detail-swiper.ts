import Swiper from "swiper";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const thumbs = new Swiper(".preview-swiper__thumbs", {
  modules: [Navigation, Thumbs],
  direction: "vertical",
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
});

const main = new Swiper(".preview-swiper__main", {
  modules: [Navigation, Thumbs, Pagination],
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  thumbs: { swiper: thumbs },
  navigation: {
    nextEl: ".preview-swiper__next",
    prevEl: ".preview-swiper__prev",
  },
  pagination: {
    el: ".preview-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
});

const gallery = document.querySelector(".preview-swiper__main-wrapper");

if (gallery instanceof HTMLElement) {
  lightGallery(gallery, {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: "your_license_key",
    speed: 500,
    // ... other settings
  });
}
