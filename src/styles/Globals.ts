import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 60%;
  }

  body {
    height: 100vh;
    background: #f0f0f0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 500 1.6rem 'M PLUS Rounded 1c';
    /* font-family: 'M PLUS Rounded 1c', sans-serif; */
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    html {
      font-size: 62.5%;
    }
  }
`;
