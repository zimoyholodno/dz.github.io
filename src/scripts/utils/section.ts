/**
 * Получение бокового отступа внутри Section
 */
export function getSectionOffset(selector: string) {
  const page = document.documentElement;
  const width = page.clientWidth;

  const element = document.querySelector(selector);

  if (element instanceof HTMLElement) {
    const container = window
      .getComputedStyle(element)
      .getPropertyValue("--_container")
      .slice(0, -2);

    const padding = window
      .getComputedStyle(element)
      .getPropertyValue("--container-padding")
      .slice(0, -2);

    if (!window.matchMedia("(min-width: 640px)").matches) {
      return +padding;
    }

    return Math.max((width - +container) / 2, +padding);
  }

  return 0;
}
