import { onCleanup } from "solid-js";

// declarations
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      clickOutside: () => any;
    }
  }
}

export default function clickOutside(el: any, accessor: any) {
  const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}