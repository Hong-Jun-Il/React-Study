import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    ul,
    li{
        list-style: none;
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    
`;