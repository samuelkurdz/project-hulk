import { useForm, SubmitHandler } from "react-hook-form";
import { SvgIcon } from "../../components/svg-icon";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div className="max-w-sm">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address">
                Email address
              </label>
              <input
                defaultValue="test"
                {...register("example")}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password">
                Password
              </label>
              <input
                {...register("exampleRequired", { required: true })}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SvgIcon
                  iconType="outline"
                  iconName="LockClosedIcon"
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
