import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router";
import styled from "styled-components";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
`;

function MainLayout() {
    return (
        <Wrap>
            <Header />
            <Outlet />
            <Footer />
        </Wrap>
    );
}

export default MainLayout;