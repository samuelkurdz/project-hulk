import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const authRoutes: RouteDefinition = {
  path: "auth",
  children: [
    {
      path: "login",
      component: lazy(() =>
        import("./pages/auth").then((com) => ({ default: com.LoginPage }))
      ),
    },
    {
      path: "signup",
      component: lazy(() =>
        import("./pages/auth").then((com) => ({ default: com.Signup }))
      ),
    },
  ],
};

const mainRoutes: RouteDefinition = {
  path: "",
  component: lazy(() =>
    import("./layouts").then((com) => ({ default: com.MainLayout }))
  ),
  children: [
    {
      path: "",
      component: lazy(() =>
        import("./pages/dashboard").then((com) => ({ default: com.Dashboard }))
      ),
    },
    {
      path: "teams",
      component: lazy(() =>
        import("./pages/teams/manage-teams").then((com) => ({ default: com.ManageTeams }))
      ),
    },
    {
      path: "attendances",
      component: lazy(() =>
        import("./pages/attendances").then((com) => ({ default: com.ManageAttendance }))
      ),
    },
    {
      path: "*",
      component: lazy(() =>
        import("./layouts").then((com) => ({ default: com.NotFoundLayout }))
      ),
    },
  ],
};

export const appRoutes: RouteDefinition[] = [authRoutes, mainRoutes];
