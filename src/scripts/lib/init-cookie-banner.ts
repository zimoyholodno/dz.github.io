/**
 * Инициализация cookie banner
 *
 * https://spaceapp.ru/Wiki/Article?articleId=14043
 */

const cookieAcceptKey = "cookie-accepted";

export function initCookieBanner(selector: string) {
  const cookieBanner = document.querySelector(selector);

  if (cookieBanner instanceof HTMLElement) {
    const accepted =
      localStorage.getItem(cookieAcceptKey) ||
      sessionStorage.getItem(cookieAcceptKey);

    if (!accepted) {
      cookieBanner.style.display = "flex";

      const hideCookieBanner = () => {
        cookieBanner.style.display = "none";
      };

      const acceptCookie = () => {
        localStorage.setItem(cookieAcceptKey, "true");
        hideCookieBanner();
      };

      const closeCookie = () => {
        sessionStorage.setItem(cookieAcceptKey, "true");
        hideCookieBanner();
      };

      const acceptButtons = cookieBanner.querySelectorAll(
        "button[data-cookie-accept]",
      );
      acceptButtons.forEach((button) => {
        button.addEventListener("click", acceptCookie, { once: true });
      });

      const closeButtons = cookieBanner.querySelectorAll(
        "button[data-cookie-close]",
      );
      closeButtons.forEach((button) => {
        button.addEventListener("click", closeCookie, { once: true });
      });
    }
  } else {
    console.error(`Cookie banner not found: ${selector}`);
  }
}
