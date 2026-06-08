/**
 *  Файл для общих скриптов на всех страницах
 */

import { initDrawer } from "@lib/init-drawer";
import { initPageWidth } from "@lib/page-width";

initPageWidth();

// инициализация мобильного меню
initDrawer({ name: "mobile-menu" });

// модальные окна
import "@lib/modal";

// маска телефона
import "@lib/mask-phone";

// работа с формами
import "@lib/form";

import "@lib/select";
import "@lib/tab";
import "@lib/header";

import MicroModal from "micromodal";

MicroModal.init({
  awaitCloseAnimation: true,
  disableScroll: true,
});

const form = document.querySelector("#main-form");
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    setTimeout(() => {
      MicroModal.show("modal-success");
    }, 500);
  });
}
