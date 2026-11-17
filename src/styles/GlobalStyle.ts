import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    a {
        color: inherit;             // 부모 색상을 물려받는다
        text-decoration: none;
    }
`;

export default GlobalStyle;
