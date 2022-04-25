import { createGlobalStyle } from 'styled-components'
const WallImage = require('./assets/images/wall-background.jpg');

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  .App {
    background: url(${WallImage}) no-repeat center;
    background-size: cover;
    height: 100vh;
    padding: 20px;
  }
`