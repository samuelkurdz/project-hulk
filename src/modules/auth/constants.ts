import { formFieldsData } from "../../interfaces";

export type LoginFormValues = {
  email: string;
  password: string;
}


export const loginFormData: formFieldsData = {
  formName: 'login-form',
  fields: [
    {
      name: 'email',
      type: "text",
      elementType: 'input',
      hasLabel: true,
      labelText: 'Email address',
      registerOptions: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address",
        },
      },
    },
    {
      name: 'password',
      type: "password",
      elementType: 'input',
      hasLabel: true,
      labelText: 'Password',
      registerOptions: {
        required: "Password is required",
      },
    }
  ]
};


export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


export const signUpFormData: formFieldsData = {
  formName: 'signup-form',
  fields: [
    {
      name: 'firstName',
      type: "text",
      elementType: 'input',
      hasLabel: true,
      labelText: 'First name',
      registerOptions: {
        required: "First name is required",
      },
    },
    {
      name: 'lastName',
      type: "text",
      elementType: 'input',
      hasLabel: true,
      labelText: 'Last name',
      registerOptions: {
        required: "last name is required",
      },
    },
    {
      name: 'email',
      type: "text",
      elementType: 'input',
      hasLabel: true,
      labelText: 'Email address',
      registerOptions: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address",
        },
      },
    },
    {
      name: 'password',
      type: "password",
      elementType: 'input',
      hasLabel: true,
      labelText: 'Password',
      registerOptions: {
        required: "Password is required",
      },
    }
  ]
};