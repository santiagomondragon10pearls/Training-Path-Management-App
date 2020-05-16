import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #4c4c4c;
      box-shadow: inset 0 0 20px 0px #000;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(255, 255, 255, 0.1);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(255, 255, 255, 0.5);
    }

    & * {
      box-sizing: border-box;
      outline: none;
      transition: all 0.2s ease-in-out;
      font-family: 'Heebo', sans-serif;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }

    & h1, & h2, & h3, & h4, & h5, & h6 {
      font-family: 'Merriweather', serif;
    }

    & #app {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default GlobalStyle;
