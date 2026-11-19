import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router";
import styled from "styled-components";
import {type Dispatch, type SetStateAction } from "react";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

function MainLayout({
    toggleTheme,
    theme,
    setTheme,
}: {
    toggleTheme: () => void;
    theme: "light" | "dark" | "red";
    setTheme: Dispatch<SetStateAction<"light" | "dark" | "red">>;
}) {
    return (
        <Wrap>
            <Header toggleTheme={toggleTheme} />
            <Outlet />
            <Footer />
        </Wrap>
    );
}

export default MainLayout;