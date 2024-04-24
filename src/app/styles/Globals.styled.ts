'use client';

import { createGlobalStyle } from 'styled-components';
import { colors, lineHeights } from './Variables';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;  box-sizing: border-box;
    padding: 0;
    margin: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  html{
    font-size: 16px;
  }
  body {
    max-width: 100vw;
    overflow-x: hidden; 
    background: ${colors.dark};
    color: ${colors.light};
    line-height: ${lineHeights.md}
  }
  main {
    height: 100vh;
    display: flex;
    justify-self: center;
    align-items: center;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
