import  { createBrowserRouter, type RouteObject } from "react-router";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

const AppRouter = () => {
  const routes: RouteObject[] = [
      {
          element: <MainLayout />,
          path: "/",
          children: [
              { index: true, element: <Home /> }, // Home => "/"
              { path: "about", element: <About /> }, // About => "/about"
          ],
      },
  ];
    return createBrowserRouter(routes);
};
export default AppRouter;