import noUiSlider from "nouislider";
import wNumb from "wnumb";
import IMask from "imask/holder";
import "imask/masked/pipe";
import "imask/masked/number";

const sliders = document.querySelectorAll(".range");

const moneyFormat = wNumb({
  thousand: " ",
  decimals: 0,
});

function valueToSize(element: HTMLInputElement) {
  element.size = element.value.trim().length;
}

sliders.forEach((wrapper) => {
  let range = wrapper.querySelector(".range__element");
  let from = wrapper.querySelector(".range__from");
  let to = wrapper.querySelector(".range__to");

  if (
    range instanceof HTMLElement &&
    from instanceof HTMLInputElement &&
    to instanceof HTMLInputElement
  ) {
    const min = wrapper.getAttribute("data-min");
    const max = wrapper.getAttribute("data-max");
    const start = wrapper.getAttribute("data-start");
    const end = wrapper.getAttribute("data-end");

    to.addEventListener("input", () => {
      valueToSize(to);
    });

    from.addEventListener("input", () => {
      valueToSize(from);
    });

    if (min && max && start && end) {
      const mask = {
        mask: Number,
        scale: 2,
        thousandsSeparator: " ",
        padFractionalZeros: false,
        normalizeZeros: true,
        radix: ".",
        mapToRadix: ["."],
        autofix: true,
        min: +min,
        max: +max,
      };

      IMask(from, mask);
      IMask(to, mask);

      noUiSlider.create(range, {
        start: [+start, +end],
        connect: true,
        format: moneyFormat,

        range: {
          min: +min,
          max: +max,
        },
      });

      let fromValue = +start;
      let toValue = +end;

      from.value = moneyFormat.to(+start);
      to.value = moneyFormat.to(+end);

      valueToSize(to);
      valueToSize(from);

      //@ts-ignore
      range.noUiSlider.on("slide", function (values, handle) {
        fromValue = values[0];
        toValue = values[1];

        if (
          from instanceof HTMLInputElement &&
          to instanceof HTMLInputElement
        ) {
          from.value = String(values[0]);
          to.value = String(values[1]);

          valueToSize(to);
          valueToSize(from);
        }
      });

      from.addEventListener("input", function () {
        fromValue = moneyFormat.from(this.value);
        //@ts-ignore
        range.noUiSlider.set([fromValue, toValue]);
      });

      to.addEventListener("input", function () {
        toValue = moneyFormat.from(this.value);
        //@ts-ignore
        range.noUiSlider.set([fromValue, toValue]);
      });
    }
  }
});
