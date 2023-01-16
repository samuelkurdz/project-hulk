import { email, FormState, Maybe, required, ValidateField } from "@modular-forms/solid";

export type formFieldsData<T> = {
  formName: string;
  fields: FormField<T>[]
}

type FormField<T> = {
  name: keyof T;
  validate?: ValidateField<Maybe<string>> | ValidateField<Maybe<string>>[];
  wrapperClasses?: string;
  elementType: "input" | "select" | "checkbox";
  type: "email" | "number" | "password" | "text";
  label?: string;
  placeholder?: string;
}


export type LoginFormValues = {
  email: string;
  password: string;
}

export const loginFormData: formFieldsData<LoginFormValues> = {
  formName: "login-form",
  fields: [
    {
      name: "email",
      validate: [
        required("Please enter your email."),
        email("The email address is badly formatted."),
      ],
      type: "text",
      elementType: "input",
      label: "Email address",
      placeholder: "example@email.com"
    },
    {
      name: "password",
      type: "password",
      elementType: "input",
      label: "Password",
      validate: [
        required("Please enter your password."),
      ],
      placeholder: "********"
    }
  ]
};