import type { ComponentProps } from "astro/types";
import AccordionExample from "./AccordionExample.astro";

type Props = {
  variant: ComponentProps<typeof AccordionExample>["variant"];
};

export default {
  component: AccordionExample,
};

export const Chevron = {
  args: {
    variant: "chevron",
  } satisfies Props,
};

export const Plus = {
  args: {
    variant: "plus",
  } satisfies Props,
};
