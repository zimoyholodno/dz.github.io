//@ts-ignore
import Accordion from "accordion-js";

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  new Accordion(accordion, {
    duration: 200,
    showMultiple: true,
    elementClass: "accordion__item",
    activeClass: "accordion__item--active",
    triggerClass: "accordion__trigger",
    panelClass: "accordion__panel",
  });
});
