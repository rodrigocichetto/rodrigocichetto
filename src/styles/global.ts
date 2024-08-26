'use-client';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  @font-face {
    font-family: 'JetBrainsMono';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src:
      local(''),
      url('/fonts/JetBrainsMono-Thin-100.woff2') format('woff2');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src:
      local(''),
      url('/fonts/JetBrainsMono-Light-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      local(''),
      url('/fonts/JetBrainsMono-Regular-400.woff2') format('woff2');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      local(''),
      url('/fonts/JetBrainsMono-Medium-500.woff2') format('woff2');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:
      local(''),
      url('/fonts/JetBrainsMono-Bold-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src:
      local(''),
      url('/fonts/JetBrainsMono-ExtraBold-800.woff2') format('woff2');
  }

  /* indie-flower-regular - latin */
  @font-face {
    font-family: 'Indie Flower';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      local(''),
      url('/fonts/indie-flower-v12-latin-regular.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    background-color: ${theme.colors.background};
    font-family: ${theme.font.family};

    transition: background-color 0.2s ease-in-out;
  }
`}
`;

export default GlobalStyles;
