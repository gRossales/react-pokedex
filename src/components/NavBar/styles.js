import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background: var(--background);
  height: 5rem;
  display: flex;
  align-items: center;
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
