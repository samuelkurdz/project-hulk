import { PageHeader } from "../../components/page-header";
import { DashboardStatistics } from "./components";

export const Dashboard = () => {
  return (
    <>
      <div class="flex justify-between items-center">
        <PageHeader headerTitle="Dashboard" />
      </div>
      <DashboardStatistics />
    </>
  );
};
