import React from "react";
import LogoSrc from "../../assets/logo.png";

import { Container, Header, Logo } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <Logo src={LogoSrc} />
      <Header>PokeDex</Header>
    </Container>
  );
};

export default NavBar;
