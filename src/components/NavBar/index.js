import React from "react";
import LogoSrc from "../../assets/logo.png";

import { Container, Header, Logo, CustomLink } from "./styles";

const NavBar = (props) => {
  return (
    <Container>
      <CustomLink to="/">
        <Logo src={LogoSrc} />
        <Header>PokeDex</Header>
      </CustomLink>
    </Container>
  );
};

export default NavBar;
