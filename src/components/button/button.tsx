import { PropsWithChildren, ReactNode } from "react";

export interface ButtonProps extends PropsWithChildren {
  // border: string;
  // color: string;
  // height: string;
  // width: string;
  onClick?: () => void;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};
