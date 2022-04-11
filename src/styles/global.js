import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --bug: #729f3f;
  --dragon: #53a4cf;
  --fairy: #fdb9e9;
  --fire: #fd7d24;
  --ghost: #7b62a3;
  --ground: #f7de3f;
  --normal: #a4acaf;
  --psychic: #f366b9;
  --steel: #9eb7b;
  --dark: #707070;
  --electric: #eed535;
  --fighting: #d56723;
  --flying: #3dc7ef;
  --grass: #9bcc50;
  --ice: #51c4e7;
  --poison: #b97fc9;
  --rock: #a38c21;
  --water: #4592c4;

  --hp: #FF5959;
  --attack: #F5AC78;
  --defense: #FAE078;
  --special-attack: #9DB7F5;
  --special-defense: #A7DB8D;
  --speed: #FA92B2;

  --primary: #D15C56;
  --secondary: #AF3731;
  --background: #B71C1C;
}

*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; //14px
  }
}

body{
  -webkit-font-smoothing: antialiased;
}

body {
   font: 400 1rem 'Roboto', sans-serif;
}

button{
  cursor:pointer;
  font-weight: 500;
  background-color: var(--background);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  width: 9rem;
  border: none;

  transition: filter 0.2s;
  &:hover{
    filter: brightness(1.2);
  }
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

a {
  color:inherit;
  text-decoration:none;
}
`;
