import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body{
        font-size: 62.5% !important;
        font-family: "Inter", sans-serif;
        background-color: ${({theme})=>theme.colors.mainBg};
    }

    li, ol{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    img, video{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;