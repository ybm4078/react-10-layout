import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider} from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    // Props를 통해 setTheme를 내릴 것인가

    const toggleTheme = ()=>  {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
    }
    return (
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(toggleTheme)} />
        </ThemeProvider>
    );
}
export default App;
