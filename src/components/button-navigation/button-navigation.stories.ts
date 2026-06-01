import type { ComponentProps } from "astro/types";
import ButtonNavigation from "./ButtonNavigation.astro";

type Props = ComponentProps<typeof ButtonNavigation>;

export default {
  component: ButtonNavigation,
};

export const Left = {
  args: { position: "left" } satisfies Props,
};

export const Right = {
  args: { position: "right" } satisfies Props,
};
