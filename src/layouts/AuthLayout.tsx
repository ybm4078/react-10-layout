import styled from "styled-components";
import { Outlet } from "react-router";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function AuthLayout() {
    return (
        <Wrap>
            <Outlet />
        </Wrap>
    );
}
export default AuthLayout;
