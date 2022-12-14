import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8284fa;
    --purple-dark: #5e60ce;
    --blue: #4EA8DE;
    --blue-dark: #1e6f9f;
    --red-danger: #E25858;

    --gray-700: #0d0d0d;
    --gray-600: #1a1a1a;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #d9d9d9;
    --gray-100: #f2f2f2;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    background-color: var(--gray-600);
  }
`;
