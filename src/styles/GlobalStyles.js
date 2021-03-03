import { createGlobalStyle } from "styled-components";
import { baseColors } from "./Colors";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body, button{
   font: 400 1rem 'Roboto', sans-serif;
}

button{
  cursor:pointer;
  background-color: ${baseColors.background};
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 5px;
  width: 150px;
  border: none;
  margin: 0px 10px 15px 10px;
  &:disabled {
    opacity: 70%;
  }
}
a {
  color:inherit;
  text-decoration:none;
}
`;
