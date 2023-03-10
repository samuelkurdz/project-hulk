import { useRoutes } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Component } from "solid-js";
import { SnacksJar } from "./components/snackbar";
import { appRoutes } from "./routes";

const queryClient = new QueryClient();
const AppRoutes = useRoutes(appRoutes);

const App: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <SnacksJar />
    </QueryClientProvider>
  );
};

export default App;
