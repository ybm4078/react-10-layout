import  { createBrowserRouter, type RouteObject } from "react-router";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import SignUp from "../pages/auth/SignUp.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import LogIn from "../pages/auth/LogIn.tsx";

const AppRouter = () => {
  const routes: RouteObject[] = [
      {
          element: <AuthLayout />,
          path: "/auth",
          children: [
              { path: "login", element: <LogIn /> },
              { path: "signup", element: <SignUp /> },
          ],
      },
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