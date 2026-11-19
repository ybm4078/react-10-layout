import styled, { useTheme } from "styled-components";
import { Link } from "react-router";

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    background-color: ${props => props.theme.color.muted};
    padding: 10px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.color.primary};
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled.button`
    background: none;
    border: none;
    font-size: 24px;
`;

function Header({ toggleTheme }: { toggleTheme: () => void }) {
    const theme = useTheme();

    return (
        <>
            <Head>
                <Nav>
                    <Logo>MyApp</Logo>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>about</Link>
                </Nav>
                <NavRight>
                    <Link to={"/auth/login"}>로그인</Link>
                    <Link to={"/auth/signup"}>회원가입</Link>
                    <Button onClick={toggleTheme}>{theme.icon}</Button>
                </NavRight>
            </Head>
        </>
    );
}
export default Header;
