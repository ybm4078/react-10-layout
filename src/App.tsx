import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider} from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import { useEffect, useState } from "react";
import {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme, redTheme } from "./styles/theme.ts";

function App() {
    // localStorage를 통해 프로그램이 꺼지더라도 데이터를 유지하겠다 라고 결정했다고 해서
    // state를 사용 안하는 것은 아님.
    // 1. 화면이 다 그려진 상태에서 사용자는 button을 눌러 값을 변화시켜야 하고
    // 2. state의 값이 변화함에 따라 화면을 다시 그려줘야되기 때문

    // localStorage에서 getItem을 했었을 때 해당하는 키의 데이터가 없을 수 있음 => undefined
    //                 getItem을 했었을 때 key가 있더라고 그에 대한 값은 무조건 string
    // const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme") === 'dark' ? "dark" : "light");
    const [theme, setTheme] = useState<"light" | "dark" | "red" >(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "light" ? "light" : savedTheme ==="dark" ? "dark" : "red";
    });
    // Props를 통해 setTheme를 내릴 것인가

    useEffect(() => {
        localStorage.setItem("theme", theme);
    },[theme])

    const toggleTheme = ()=>  {
        // if (theme === "light") setTheme("dark");
        // else setTheme("light");

        // state와 localStorage를 따로따로 저장시킨 코드
        // const savedTheme = theme === "dark" ? "light" : "dark";
        // setTheme(savedTheme);
        // localStorage.setItem("theme", savedTheme);
        // useState에서 얻어진 set함수의 매개변수 자리엔 함수가 들어갈 수 있는데
        // 이 때, prev는  "현재 state에 저장된 값"이 들어옴
        setTheme(prev => {
            if (prev === "light") return "dark";
            if (prev === "dark") return "red";
            return "light";
        });
    }

    return (
        <ThemeProvider
            theme={theme === "light" ? LightTheme : theme === "dark" ? DarkTheme : redTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(toggleTheme, theme, setTheme)} />
        </ThemeProvider>
    );
}
export default App;
