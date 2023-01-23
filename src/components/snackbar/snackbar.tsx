import clsx from "clsx";
import { createSignal, For, onCleanup, Show } from "solid-js";
// import { v4 as uuidv4 } from 'uuid';
import UUID from "uuidjs";
import { CustomIcon, IconProps } from "../icon";

interface SnackBarProps {
  snackType: "success" | "error" | "warning" | "generic";
  snackMessage: string;
  snackIcon?: IconProps["iconName"];
  /**
   * lifetime for snack to display (in seconds)
   */
  duration: 2500 | 3000 | 3500 | 4000;
}
interface SnackBarPropsWithId extends SnackBarProps {
  snackId: string;
}

const [snacks, setSnacks] = createSignal<SnackBarPropsWithId[]>([]);

function makeSnack(newSnack: SnackBarProps) {
  setSnacks([{ ...newSnack, snackId: UUID.generate() }, ...snacks()]);
}

const SnacksJar = () => {
  return (
    <div class="flex flex-col gap-2.5 fixed bottom-5 left-1/2 -translate-x-1/2">
      <For each={snacks()}>{(snack) => <Snackbar {...snack} />}</For>
    </div>
  );
};

const Snackbar = (props: SnackBarPropsWithId) => {
  const [animateLeave, setAnimateLeave] = createSignal(false);

  const leavingTimer = setTimeout(() => {
    setAnimateLeave(true);
  }, props.duration - 500);

  const timer = setTimeout(() => {
    setSnacks(snacks().filter((snack) => snack.snackId !== props.snackId));
  }, props.duration);
  onCleanup(() => {
    clearTimeout(timer);
    clearTimeout(leavingTimer);
  });

  return (
    <div
      id="snack"
      class={clsx(
        "flex gap-1.5 items-center rounded-md py-3 px-4 font-semibold justify-center text-white",
        props.snackType === "error" && " bg-red-600",
        props.snackType === "warning" && "bg-yellow-600",
        props.snackType === "generic" && "bg-blue-600",
        props.snackType === "success" && "bg-green-600",
        animateLeave() && "leaving"
      )}
    >
      <Show when={props.snackIcon}>
        <CustomIcon
          class="w-5 h-5"
          iconType="solid"
          iconName={props.snackIcon!}
        />
      </Show>
      <span>{props.snackMessage}</span>
    </div>
  );
};

export { makeSnack, SnacksJar };
