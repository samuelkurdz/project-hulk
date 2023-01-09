import { createBrowserRouter } from "react-router-dom";
import AuthModule from "./modules/auth/auth.module";
import Login from "./modules/auth/login";
import SignUp from "./modules/auth/signup";
import HomePage from "./modules/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthModule />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  }
]);
