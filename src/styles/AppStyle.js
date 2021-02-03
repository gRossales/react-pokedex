import styled from "styled-components";

export const Button = styled.button`
  background-color: #a84b47;
  color: #fff;
  padding: 15px 32px;
  border-radius: 5px;
  width: 150px;
  border: none;
  margin: 0px 10px 15px 10px;
  &:disabled {
    opacity: 70%;
  }
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
