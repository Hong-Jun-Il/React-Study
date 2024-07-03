import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body{
        font-size: 62.5% !important;
    }

    li, ol{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }

    img, video{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;