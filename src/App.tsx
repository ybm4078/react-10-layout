import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider} from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    // Props를 통해 setTheme를 내릴 것인가

    const toggleTheme = ()=>  {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
    }
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={AppRouter(toggleTheme)} />
        </>
    );
}
export default App;
