import styled from "styled-components";
import { baseColors } from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin: 0 auto;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px 0px 8px 0px;
  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  @media (min-width: 600px) {
    margin-inline: 32px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;
