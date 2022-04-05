import React from "react";
import LogoSrc from "../../assets/logo.png";

import { Container, Logo, CustomLink } from "./styles";

const NavBar = (props) => {
  return (
    <Container>
      <CustomLink to="/">
        <Logo src={LogoSrc} />
        <h1>PokeDex</h1>
      </CustomLink>
    </Container>
  );
};

export default NavBar;
