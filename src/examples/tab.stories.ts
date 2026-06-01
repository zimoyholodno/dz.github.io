import type { ComponentProps } from "astro/types";
import TabExample from "./TabExample.astro";

type Props = ComponentProps<typeof TabExample>;

export default {
  component: TabExample,
};

export const Scroll = {
  args: {
    mobile: "scroll",
  } satisfies Props,
};

export const Wrap = {
  args: {
    mobile: "wrap",
  } satisfies Props,
};
