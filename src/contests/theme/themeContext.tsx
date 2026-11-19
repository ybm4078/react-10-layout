

// Context (맥락)
// 리액트 컴포넌트 트리 전체에 데이터를 공급할 수 있는 내장 상태관리 시스템
// 사용방법 : 생성 -> 데이터 주입 -> 사용

import { createContext } from "react";

type ThemeMode = "light" | "dark" | "red"

type ThemeContextType = {
    theme: ThemeMode,
    toggleTheme: VoidFunction,
}

// Context 생성 : createContext(초기값) => 근데 context의 대부분의 초기값은 null
export const ThemeContext = createContext<ThemeContextType | null>(null);