import styled from "styled-components";
import { Link } from "react-router";
import {useContext} from "react";
import {ThemeContext} from "../contests/theme/themeContext.tsx";
import { FaMoon, FaRegistered, FaSun } from "react-icons/fa";

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

function Header() {
    // 3단계. 컨텍스트 사용: useContext(사용해야되는 컨텍스트)
    // context를 사용할 때에는 'null'이 나올수 있음 => React가 제대로 켜지지 못 했을 때
    const themeContext = useContext(ThemeContext)
    if (!themeContext) throw new Error("Provider 안에서 사용해주세요");
    // const theme = useTheme();

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
                    <Button onClick={themeContext.toggleTheme}>
                        {themeContext.theme === "light" ? (
                            <FaSun />
                        ) : themeContext.theme === "dark" ? (
                            <FaMoon />
                        ) : (
                            <FaRegistered />
                        )}
                    </Button>
                </NavRight>
            </Head>
        </>
    );
}
export default Header;
