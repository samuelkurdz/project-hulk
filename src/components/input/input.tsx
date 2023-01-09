import { useId } from "react";
import {
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export interface InputProps {
  wrapperClasses?: string;

  hasLabel?: boolean;
  labelText?: string;

  formName: string;
  name: string;
  type: "email" | "number" | "password" | "search" | "text";

  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  errors: Partial<FieldErrorsImpl<any>>;
}

export const Input = ({
  register,
  registerOptions,
  name,
  type,
  formName,
  hasLabel,
  labelText,
  errors,
}: InputProps) => {
  const uniqueFormId = `${formName}-${name}-input-${useId()}`;
  const inputHasError = errors && !!errors[name];
  return (
    <div>
      {hasLabel && (
        <label
          htmlFor={uniqueFormId}
          className={`mb-3 block font-medium text-gray-700`}
        >
          {labelText}
        </label>
      )}
      <input
        {...register(name, registerOptions)}
        id={uniqueFormId}
        type={type}
        name={name}
        className={`block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-indigo-600 ${
          inputHasError &&
          "border-red-600 focus:border-red-600 focus:ring-red-600"
        }`}
      ></input>

      {errors && errors[name] && (
        <small className="text-red-600">
          {errors[name]?.message?.toString()}
        </small>
      )}
    </div>
  );
};
