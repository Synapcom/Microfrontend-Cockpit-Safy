import { createGlobalStyle } from 'styled-components';
import font from './font';

const GlobalStyle = createGlobalStyle`

    ${font}

    body {
        position: relative;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
`;

export default GlobalStyle;
