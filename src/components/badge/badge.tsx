import clsx from "clsx";
import { JSX } from "solid-js";

interface BadgeProps {
  variant: "success" | "error" | "warning";
  children: JSX.Element;
  onClick?: () => void;
  wrapperClass?: string;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div
      class={clsx(
        "rounded-xl py-0.5 px-2.5 text-xs font-medium inline-block",
        props.variant === "success" && "bg-green-100 text-green-800",
        props.variant === "error" && "bg-red-100 text-red-800",
        props.variant === "warning" && "bg-yellow-100 text-yellow-800",
        props.wrapperClass
      )}
    >
      {props.children}
    </div>
  );
};
