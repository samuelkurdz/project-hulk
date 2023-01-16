import { Accessor, createSignal } from "solid-js";

export function useToggle(initialValue: boolean = false): [Accessor<boolean>, (newValue?: boolean) => void] {
  const [value, setValue] = createSignal(initialValue);

  const toggle = (newValue?: boolean) => {
    setValue((prevValue) =>
      typeof newValue === 'boolean' ? newValue : !prevValue
    );
  };

  return [value, toggle];
}