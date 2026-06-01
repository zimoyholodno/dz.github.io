/**
 *  Файл для общих скриптов на всех страницах
 */

import { initCookieBanner } from "@lib/init-cookie-banner";
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

// cookie
initCookieBanner(".cookie-banner");
import "@lib/select";
import "@lib/tab";
