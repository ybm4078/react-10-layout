import styled from "styled-components";
import { Outlet } from "react-router";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

function AuthLayout() {
    return (
        <Wrap>
            <Header />
            <Outlet />
            <Footer />
        </Wrap>
    );
}
export default AuthLayout;
