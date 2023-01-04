import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputProps {
  hasLabel?: boolean;
  formName: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  name: string;
  type: "email" | "number" | "password" | "search" | "text";
}

export const Input = ({
  register,
  registerOptions,
  name,
  type,
  formName,
}: InputProps) => {
  return (
    <input
      {...register(name, registerOptions)}
      id={formName + name + "input"}
      type={type}
      name={name}
      required
      className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-indigo-600"
    ></input>
  );
};
