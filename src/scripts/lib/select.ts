/**
 * Опции для селекта: https://github.com/Choices-js/Choices?tab=readme-ov-file#setup
 */

import Choices, { type ClassNames } from "choices.js";

const classNames: ClassNames = {
  containerOuter: ["select"],
  containerInner: ["select__inner"],
  input: ["select__input"],
  inputCloned: ["select__input--cloned"],
  list: ["select__list"],
  listItems: ["select__list--multiple"],
  listSingle: ["select__list--single"],
  listDropdown: ["select__list--dropdown"],
  item: ["select__item"],
  itemSelectable: ["select__item--selectable"],
  itemDisabled: ["select__item--disabled"],
  itemChoice: ["select__item--choice"],
  description: ["select__description"],
  placeholder: ["select__placeholder"],
  group: ["select__group"],
  groupHeading: ["select__heading"],
  button: ["select__button"],
  activeState: ["is-active"],
  focusState: ["is-focused"],
  openState: ["is-open"],
  disabledState: ["is-disabled"],
  highlightedState: ["is-highlighted"],
  selectedState: ["is-selected"],
  flippedState: ["is-flipped"],
  loadingState: ["is-loading"],
  notice: ["select__notice"],
  addChoice: ["select__item--selectable", "add-choice"],
  noResults: ["has-no-results"],
  noChoices: ["has-no-choices"],
};

const classDrop: ClassNames = {
  containerOuter: ["drop"],
  containerInner: ["drop__inner"],
  input: ["drop__input"],
  inputCloned: ["drop__input--cloned"],
  list: ["drop__list"],
  listItems: ["drop__list--multiple"],
  listSingle: ["drop__list--single"],
  listDropdown: ["drop__list--dropdown"],
  item: ["drop__item"],
  itemSelectable: ["drop__item--selectable"],
  itemDisabled: ["drop__item--disabled"],
  itemChoice: ["drop__item--choice"],
  description: ["drop__description"],
  placeholder: ["drop__placeholder"],
  group: ["drop__group"],
  groupHeading: ["drop__heading"],
  button: ["drop__button"],
  activeState: ["is-active"],
  focusState: ["is-focused"],
  openState: ["is-open"],
  disabledState: ["is-disabled"],
  highlightedState: ["is-highlighted"],
  selectedState: ["is-selected"],
  flippedState: ["is-flipped"],
  loadingState: ["is-loading"],
  notice: ["drop__notice"],
  addChoice: ["drop__item--selectable", "add-choice"],
  noResults: ["has-no-results"],
  noChoices: ["has-no-choices"],
};
const selects = document.querySelectorAll(".js-choice");
const drops = document.querySelectorAll(".js-drop");

drops.forEach((select) => {
  if (select instanceof HTMLSelectElement) {
    const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: undefined,
      classNames: classDrop,
    });
  }
});

selects.forEach((select) => {
  if (select instanceof HTMLSelectElement) {
    const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: undefined,
      classNames,
    });
  }
});
