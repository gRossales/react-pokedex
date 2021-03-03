import React from "react";
import { typeColors } from "../../styles/Colors";
import { Container, Image, Name, Types, Type } from "./styles";

const Pokemon = ({ data }) => {
  return (
    <Container>
      <Image src={data.sprites.front_default} />
      <Name>{data.name}</Name>
      <Types>
        {data.types.map((type) => {
          return (
            <Type
              style={{ background: typeColors[type.type.name] }}
              key={type.type.name}
            >
              {type.type.name}
            </Type>
          );
        })}
      </Types>
    </Container>
  );
};

export default Pokemon;
