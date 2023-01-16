import clsx from "clsx";
import { JSX } from "solid-js";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "xs" | "sm" | "base" | "lg" | "xl";
  width: "fit" | "full";
  class?: string;
  wrapperClass?: string;
  children: JSX.Element;
  onClick?: () => void;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      class={clsx(
        "group relative flex justify-center rounded-md border border-transparent py-2 px-4 font-normal shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        props.variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700",
        props.variant === "secondary" &&
          "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
        props.variant === "tertiary" &&
          "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
        props.size === "xs" && "text-xs py-2 px-3",
        props.size === "sm" && "text-sm leading-4 py-2.5 px-3.5",
        props.size === "base" && "text-sm leading-5 py-2.5 px-4.5",
        props.size === "lg" && "text-base py-2.5 px-4.5",
        props.size === "xl" && "text-base py-3.5 px-7",
        props.width === "fit" ? "w-fit" : "w-full",
        props.class
      )}
    >
      <span class={clsx(props.isLoading && "invisible", props.wrapperClass)}>
        {props.children}
      </span>
      {props.isLoading && (
        <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ButtonLoader size={props.size} variant={props.variant} />
        </span>
      )}

      {/* {props.isLoading ? (
      ) : (
        props.children
      )} */}
    </button>
  );
};

interface ButtonLoaderProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "xs" | "sm" | "base" | "lg" | "xl";
}
export const ButtonLoader = (props: ButtonLoaderProps) => (
  <svg
    class={clsx(
      "animate-spin",
      props.variant === "primary" ? "text-indigo-100" : "text-indigo-500",
      (props.size === "sm" || props.size === "xs") && "h-4 w-4",
      props.size === "base" && "h-5 w-5",
      (props.size === "lg" || props.size === "xl") && "h-6 w-6"
    )}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
