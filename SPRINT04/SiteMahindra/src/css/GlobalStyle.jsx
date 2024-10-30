import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
    }

    body{
    background-color: var(--color6);
    }

    :root{
        --color1: #000000;
        --color2: #3F0000;
        --color3: #7F0000;
        --color4: #B40000;
        --color5: #FF0000;
        --color6: #EBEBF2;
        --color7: #fff;
        --transition: 0.5s;
    }
`

export default GlobalStyle