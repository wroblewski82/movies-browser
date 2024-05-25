import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
  box-sizing: border-box;
  }

  *, ::after, ::before {
  box-sizing: inherit;
  }

  body {
  font-family: "Poppins", sans-serif;
  max-width: 1800px; 
  margin: 0 auto;  
  word-break: break-word;
  background-color: ${({ theme }) => theme.colors.whisper}
  }
`;

export default GlobalStyle;
