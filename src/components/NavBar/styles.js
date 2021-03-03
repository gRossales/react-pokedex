import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseColors } from "../../styles/Colors";

export const Container = styled.div`
  background: ${baseColors.primary};
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const Header = styled.h1`
  color: #fff;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px;
`;

export const CustomLink = styled(Link)`
  display: inherit;
  align-items: inherit;
  max-width: 1320px;
  margin: 0 auto;
  flex: 1;
`;
