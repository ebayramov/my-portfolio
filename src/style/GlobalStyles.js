import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        min-width: 0;
        box-sizing: border-box;
    }

  
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    body {
        text-rendering: optimizeSpeed;
        font-family: sans-serif;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text.dark};
        background-color: ${({ theme }) => theme.colors.background.light};
        line-height: 1;
    }

    #root {
        position: relative;
        height: inherit;
        overflow: auto;
        display: grid;
        grid-template-rows: min-content auto min-content;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        background-color: transparent;
        font-family: inherit;
        padding: 0;
        cursor: pointer;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    li {
        list-style-type: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a{
        text-decoration-color: white;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

`