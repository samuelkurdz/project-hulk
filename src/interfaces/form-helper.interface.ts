import { RegisterOptions } from "react-hook-form";

export type formFieldsData = {
  formName: string;
  fields: FormField[]
}

type FormField = {
  name: string;
  wrapperClasses?: string;
  elementType: 'input' | 'select' | 'checkbox';
  type: "email" | "number" | "password" | "search" | "text";
  hasLabel: boolean;
  labelText: string;
  registerOptions?: RegisterOptions;
}