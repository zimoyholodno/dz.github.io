/**
 * Инициализация компонента Drawer
 *
 * https://spaceapp.ru/Wiki/Article?articleId=14048
 */

interface DrawerArgs {
  /**
   * название drawer
   */
  name: string;

  /**
   * длительность открывания/закрывания
   *
   * @default 200
   */
  duration?: number;
}

/**
 * Инициализация компонента Drawer
 */
export function initDrawer({ name, duration = 200 }: DrawerArgs) {
  const triggers = document.querySelectorAll(`[data-drawer-trigger="${name}"]`);
  const closes = document.querySelectorAll(`[data-drawer-close="${name}"]`);
  const container = document.querySelector(`[data-drawer-container="${name}"]`);

  if (container instanceof HTMLElement) {
    container.style.setProperty("--transition", `${duration}ms ease-in-out`);
    container.setAttribute("inert", "true");

    let closeTimeoutId: ReturnType<typeof setTimeout> | null = null;

    setTriggers("false");

    function setTriggers(value: "true" | "false") {
      triggers.forEach((trigger) => {
        trigger.setAttribute("data-open", value);
      });
    }

    function closeDrawer() {
      container?.setAttribute("data-open", "idle");

      if (closeTimeoutId) {
        clearTimeout(closeTimeoutId);
      }

      closeTimeoutId = setTimeout(() => {
        container?.setAttribute("data-open", "false");
        container?.setAttribute("inert", "true");
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        setTriggers("false");
        closeTimeoutId = null;
      }, duration);
    }

    function openDrawer() {
      if (closeTimeoutId) {
        clearTimeout(closeTimeoutId);
        closeTimeoutId = null;
      }

      container?.setAttribute("data-open", "true");
      container?.removeAttribute("inert");
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
      setTriggers("true");

      //@ts-ignore
      if (typeof CloseWatcher !== "undefined") {
        //@ts-ignore
        let watcher = new CloseWatcher();
        watcher.onclose = () => {
          closeDrawer();
          watcher.destroy();
        };
      }
    }

    function onTrigger() {
      return container?.getAttribute("data-open") === "true"
        ? closeDrawer()
        : openDrawer();
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", onTrigger);
    });

    closes.forEach((close) => {
      close.addEventListener("click", closeDrawer);
    });
  } else {
    console.error(`Drawer container not found: ${name}`);
  }
}
