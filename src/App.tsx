import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider} from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import { useEffect, useState } from "react";
import {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme, redTheme } from "./styles/theme.ts";
import { ThemeContext } from "./contests/theme/themeContext.tsx";

function App() {
    const [theme, setTheme] = useState<"light" | "dark" | "red" >(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "light" ? "light" : savedTheme ==="dark" ? "dark" : "red";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    },[theme])

    const toggleTheme = ()=>  {

        setTheme(prev => {
            if (prev === "light") return "dark";
            if (prev === "dark") return "red";
            return "light";
        });
    }

    // 2단계. context에 값을 할당하고 Context 제공자로 프로그램 묶어주기
    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            <ThemeProvider
                theme={theme === "light" ? LightTheme : theme === "dark" ? DarkTheme : redTheme}>
                <GlobalStyle />
                <RouterProvider router={AppRouter()} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
export default App;
