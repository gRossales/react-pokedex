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
  @media (min-width: 600px) {
    width: 200px;
    padding: 10px;
    margin: 15px;
  }
`;

export const Image = styled.img`
  align-self: center;
  width: 96px;
  height: 96px;
  @media (min-width: 600px) {
    width: 128px;
    height: 128px;
  }
`;

export const Name = styled.h4`
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
`;

export const Type = styled.div`
  padding: 5px 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  background: cyan;
  color: #fff;
  font-size: 14px;
`;

export const Types = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const typeColors = {
  bug: "#729f3f",
  dragon: "#53a4cf",
  fairy: "#fdb9e9",
  fire: "#fd7d24",
  ghost: "#7b62a3",
  ground: "#f7de3f",
  normal: "#a4acaf",
  pyschic: "#f366b9",
  steel: "#9eb7b",
  dark: "#707070",
  electric: "#eed535",
  fighting: "#d56723",
  flying: "#3dc7ef",
  grass: "#9bcc50",
  ice: "#51c4e7",
  poison: "#b97fc9",
  rock: "#a38c21",
  water: "#4592c4",
};
