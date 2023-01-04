import { Outlet } from "react-router-dom";

export default function AuthModule() {
  return (
    <>
      <div id="auth-module-container">
        <Outlet />
      </div>
    </>
  );
}