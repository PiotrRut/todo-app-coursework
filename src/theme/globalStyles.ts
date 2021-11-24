import { createGlobalStyle, css } from 'styled-components';

import { palette } from './palette';

export const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    color: ${palette.text.default};
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  html {
    display: flex;
    min-height: 100%;
  }

  body,
  #__next,
  main {
    display: flex;
    flex: 1;
    height: auto;
    min-height: auto;
    flex-direction: column;
  }

  body {
    background-color: ${palette.primary.dark};
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${styles}
`;

export default GlobalStyle;
