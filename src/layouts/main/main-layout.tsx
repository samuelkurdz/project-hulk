import { Outlet } from "@solidjs/router";
import { Sidebar } from "./sidebar";

export const MainLayout = () => {
  return (
    <div class="grid lg:grid-cols-sideMain h-screen overflow-hidden">
      <Sidebar />
      <main class="overflow-y-scroll pt-6 px-2.5">
        <Outlet />
      </main>
    </div>
  );
};
