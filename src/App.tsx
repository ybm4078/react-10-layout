import GlobalStyle from "./styles/GlobalStyle.ts";
import styled from "styled-components";
import { RouterProvider} from "react-router";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AppRouter from "./router/AppRouter.tsx";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <>
            <GlobalStyle />
                <Wrap>
                    <Header />
                    <RouterProvider router={AppRouter()} />
                    <Footer />
                </Wrap>
        </>
    );
}
export default App;
