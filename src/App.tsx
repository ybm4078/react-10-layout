import GlobalStyle from "./styles/GlobalStyle.ts";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Wrap>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <Footer />
                </Wrap>
            </BrowserRouter>
        </>
    );
}
export default App;
