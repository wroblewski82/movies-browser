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
  word-break: break-word;
  background-color: ${({ theme }) => theme.color.whisper};
  }
`;

export default GlobalStyle;
