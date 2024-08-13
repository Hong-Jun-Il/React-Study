import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body{
        font-size: 62.5%;
    }

    img,
    video{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    a{
        text-decoration: none;
    }

    li,
    ol{
        text-decoration: none;
        list-style: none;
    }
    
    button{
        cursor: pointer;
    }
`;