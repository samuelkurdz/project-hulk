import { useToggle } from "../hooks/ui";

export const Counter = () => {
  const [val, toggle] = useToggle();

  return (
    <div>
      <p>{val() ? "true" : "false"}</p>
    </div>
  );
};
