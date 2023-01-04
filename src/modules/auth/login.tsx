import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { SvgIcon } from "../../components/svg-icon";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { loginFormData, LoginFormValues } from "./constants";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <>
      <div className="max-w-sm px-2 md:px-0 mt-40 mx-auto">
        <Logo className="w-10 h-10 inline-block" />
        <h3 className="text-gray-900 font-extrabold text-3xl mt-8">
          Sign in to your account
        </h3>
        <form
          className="mt-10 grid grid-cols-1 gap-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {loginFormData.fields.map(
            (loginFormField, index) =>
              loginFormField.elementType === "input" && (
                <Input
                  key={index + loginFormData.formName + loginFormField.name}
                  register={register}
                  name={loginFormField.name}
                  type={loginFormField.type}
                  hasLabel={loginFormField.hasLabel}
                  labelText={loginFormField.labelText}
                  formName={loginFormData.formName}
                  errors={errors}
                  registerOptions={loginFormField.registerOptions}
                />
              )
          )}

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span>Don't have an account?</span>
              <Link
                to={`/auth/signup`}
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Create account
              </Link>
            </div>
          </div>

          <Button>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SvgIcon
                iconType="outline"
                iconName="LockClosedIcon"
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              />
            </span>
            Sign in
          </Button>
        </form>
      </div>
    </>
  );
}

// {/* <button
//   type="submit"
//   className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// >
//   <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//     <SvgIcon
//       iconType="outline"
//       iconName="LockClosedIcon"
//       className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//     />
//   </span>
//   Sign in
// </button> */}
