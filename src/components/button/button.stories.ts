import type { ComponentProps } from "astro/types";
import Button from "./Button.astro";

type Props = ComponentProps<typeof Button>;

export default {
  component: Button,
};

export const Black = {
  args: {
    variant: "black",
    size: "medium",
  } satisfies Props,
};

export const White = {
  args: { variant: "white", size: "medium" } satisfies Props,
};
