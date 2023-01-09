import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/input";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { signUpFormData, SignUpFormValues } from "./constants";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => console.log(data);

  console.log(watch("password")); // watch input value by passing the name of it

  return (
    <>
      <div className="max-w-sm px-2 md:px-0 mt-40 mx-auto">
        <Logo className="w-10 h-10 inline-block" />
        <h3 className="text-gray-900 font-extrabold text-3xl mt-8">
          Create a new account
        </h3>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {signUpFormData.fields.map(
            (signupFormField, index) =>
              signupFormField.elementType === "input" && (
                <Input
                  key={index + signUpFormData.formName + signupFormField.name}
                  register={register}
                  name={signupFormField.name}
                  type={signupFormField.type}
                  hasLabel={signupFormField.hasLabel}
                  labelText={signupFormField.labelText}
                  formName={signUpFormData.formName}
                  errors={errors}
                  registerOptions={signupFormField.registerOptions}
                />
              )
          )}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span>Have an account?</span>
              <Link
                to={`/auth/login`}
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Login
              </Link>
            </div>
          </div>

          <Button>
            <span>Create account</span>
          </Button>
        </form>
      </div>
    </>
  );
}
