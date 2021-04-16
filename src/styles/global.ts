import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* lato-100 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: local(''),
      url('/fonts/lato-v17-latin-100.woff2') format('woff2');
  }

  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url('/fonts/lato-v17-latin-regular.woff2') format('woff2');
  }

  /* lato-700 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url('/fonts/lato-v17-latin-700.woff2') format('woff2');
  }

  /* lato-900 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    src: local(''),
      url('/fonts/lato-v17-latin-900.woff2') format('woff2');
  }

  /* indie-flower-regular - latin */
  @font-face {
    font-family: 'Indie Flower';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url('/fonts/indie-flower-v12-latin-regular.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyles;
