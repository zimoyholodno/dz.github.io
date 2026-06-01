import type { ComponentProps } from "astro/types";
import ModalExample from "./ModalExample.astro";

type Props = {};

export default {
  component: ModalExample,
};

export const Default = {
  args: {} satisfies Props,
};
