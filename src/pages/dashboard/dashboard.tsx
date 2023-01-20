import { DashboardStatistics } from "./components";

export const Dashboard = () => {
  return (
    <>
      <div class="page-header flex justify-between items-center">
        <h2 class="text-gray-900 font-extrabold tracking-tight text-3xl mb-6 md:mb-10">
          Dashboard
        </h2>
      </div>
      <DashboardStatistics />
    </>
  );
};
