import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`


* {
   margin : 0;
  padding : 0;

 font-family: var(--font-googleSingleDay);
background-color: ${theme.colors.main};
}
`;

export default GlobalStyle;
