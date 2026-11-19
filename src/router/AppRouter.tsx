import  { createBrowserRouter, type RouteObject } from "react-router";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import SignUp from "../pages/auth/SignUp.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import LogIn from "../pages/auth/LogIn.tsx";
import * as React from "react";

const AppRouter = (
    toggleTheme: () => void,
    theme: "light" | "dark" | "red",
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark" | "red">>,
) => {
    const routes: RouteObject[] = [
        {
            element: <AuthLayout toggleTheme={toggleTheme} />,
            path: "/auth",
            children: [
                { path: "login", element: <LogIn /> },
                { path: "signup", element: <SignUp /> },
            ],
        },
        {
            element: <MainLayout toggleTheme={toggleTheme} theme={theme} setTheme={setTheme}/>,
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