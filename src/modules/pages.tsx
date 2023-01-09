import { Sidebar } from "./sidebar";

export default function HomePage() {
  return (
    <div className="grid lg:grid-cols-sideMain h-screen overflow-hidden">
      <Sidebar />
      <main className="overflow-y-scroll pt-6 px-8">
        <p className="text-purple-900">Project Hulk</p>
      </main>
    </div>
  );
}
