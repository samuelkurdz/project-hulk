import { createForm, Field, Form } from "@modular-forms/solid";
import { createSignal, For } from "solid-js";
import { Button } from "../../components/button";
import { CustomIcon } from "../../components/icon";
import { TextInput } from "../../components/input";
import { Logo } from "../../components/Logo";
import { useLogin } from "../../hooks/apis";
import { loginFormData } from "../../interfaces";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const { login } = useLogin();
  const loginForm = createForm<LoginForm>({
    initialValues: {
      email: "redincs@gmail.com",
      password: "Sambayo@10",
    },
  });
  const submitLoginForm = (formValues: LoginForm) => {
    if (loginForm.invalid) return;
    setIsLoading(true);
    login(formValues).finally(() => setIsLoading(false));
  };

  return (
    <div class="max-w-sm px-2 md:px-0 mt-40 mx-auto">
      <Logo class="w-8 h-8 inline-block" />
      <h3 class="text-gray-900 font-extrabold text-3xl mt-8">
        Sign in to your account
      </h3>
      <Form
        class="mt-10 grid grid-cols-1 gap-y-8"
        of={loginForm}
        onSubmit={(formValues, event) => submitLoginForm(formValues)}
      >
        <div class="space-y-8 md:space-y-10 lg:space-y-12">
          <For each={loginFormData.fields}>
            {(loginFormField, i) => (
              <Field
                of={loginForm}
                name={loginFormField.name}
                validate={loginFormField.validate}
              >
                {(field) => (
                  <TextInput
                    {...field.props}
                    value={field.value}
                    error={field.error}
                    type={loginFormField.type}
                    label={loginFormField.label}
                    placeholder={loginFormField.placeholder}
                    name={`${loginFormData.formName}-${loginFormField.name}`}
                  />
                )}
              </Field>
            )}
          </For>
        </div>
        <Button
          variant="primary"
          size="xs"
          width="full"
          isLoading={isLoading()}
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <CustomIcon
              iconType="outline"
              iconName="lockClosed"
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            />
          </span>
          Sign in
        </Button>
      </Form>
    </div>
  );
};
