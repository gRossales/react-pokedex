import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  background: #ededed;
  border-radius: 5px;
  padding: 5px;
  width: 150px;
  transition: transform 0.2s;

  &:hover {
    transform: matrix(1.1,0,0,1.1,0,0);
  }


  @media (min-width: 750px) {
    width: 200px;
    padding: 10px;
    margin: 15px;
  }
`;

export const Image = styled.img`
  align-self: center;
  width: 96px;
  height: 96px;
  @media (min-width: 750px) {
    width: 128px;
    height: 128px;
  }
`;

export const Name = styled.h4`
  color: #000;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
`;

export const Type = styled.div`
  padding: 5px 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  background: var(${props=> (props.background)});
  color: #fff;
  font-size: 14px;
  font-weight: bold ;
`;

export const Types = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
