import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { SvgIcon } from "../../components/svg-icon";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <>
      <div className="max-w-sm px-2 md:px-0 mt-40 mx-auto">
        <svg viewBox="0 0 40 40" className="w-10 h-10 inline-block">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
            fill="#4338ca"
          ></path>
        </svg>
        <h3 className="text-gray-900 font-extrabold text-3xl mt-8">
          Sign in to your account
        </h3>
        <form
          className="mt-10 grid grid-cols-1 gap-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="mb-3 block font-medium text-gray-700"
            >
              Email address
            </label>
            <Input
              register={register}
              name="email"
              type="email"
              formName="loginForm"
              registerOptions={{ required: true, value: "saas@mail.com" }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-3 block  font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              register={register}
              name="password"
              type="password"
              formName="loginForm"
              registerOptions={{ required: true, value: "saas" }}
            />
            {errors.password && <span>This field is required</span>}
          </div>

          <div className="flex items-center justify-between">
            <div className="">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            {/* <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SvgIcon
                  iconType="outline"
                  iconName="LockClosedIcon"
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                />
              </span>
              Sign in
            </button> */}
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
          </div>
        </form>
      </div>
    </>
  );
}
