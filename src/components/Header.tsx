import styled from "styled-components";
import { Link } from "react-router";

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    background-color: #f4f4f4;
    padding: 10px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

function Header({ toggleTheme }: { toggleTheme: () => void }) {
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
                    <button onClick={toggleTheme}>테마토글</button>
                </NavRight>
            </Head>
        </>
    );
}
export default Header;
