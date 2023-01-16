import { clsx } from "clsx";
import { JSX, splitProps } from "solid-js";

type TextInputProps = {
  ref: (element: HTMLInputElement) => void;

  type: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  name: string;

  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;

  placeholder?: string;
  required?: boolean;

  label?: string;
  error?: string;
  value: string | number | undefined;
};

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);
  return (
    <div>
      {props.label && (
        <label
          for={props.name}
          class={clsx("mb-1.5 block font-medium text-gray-700")}
        >
          {props.label}
        </label>
      )}
      <input
        {...inputProps}
        id={props.name}
        value={props.value || ""}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
        class={clsx(
          "block w-full appearance-none rounded-sm border focus:bg-white px-3 py-2 text-sm",
          props.error
            ? "border-red-600 focus:border-red-600 focus:ring-red-600 text-red-600"
            : "border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-indigo-600"
        )}
      />
      {props.error && (
        <small id={`${props.name}-error`} class="text-red-600 text-xs">
          {props.error}
        </small>
      )}
    </div>
  );
}
