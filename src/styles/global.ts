import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Vintages';
  src: url('./assets/fonts/Vintages.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono", serif;
  }

  body {
    background: #202020;
    color: white;
  }
`;
