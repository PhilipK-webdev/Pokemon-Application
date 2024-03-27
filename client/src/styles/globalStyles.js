import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    font-size:18px;
    padding:0;
    margin: 0;
    background: #FDE767;
    color: black;
    font-family: "Zilla Slab", serif;
    font-weight: 300;
    font-style: normal;
    width:100%;
}

html{
    box-sizing:border-box;
}

*,*::before, *::after{
 box-sizing:inherit
}
`;

export default GlobalStyles;
