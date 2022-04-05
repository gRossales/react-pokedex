import React, {memo} from "react";

import { Container, Image, Name, Types, Type } from "./styles";

const Pokemon = memo(({ data }) => {
  return (
    <Container>
      <Image src={data.sprites.front_default} />
      <Name>{data.name}</Name>
      <Types>
        {data.types.map((type) => {
          return (
            <Type
              background={"--"+type.type.name}
              key={type.type.name}
            >
              {type.type.name}
            </Type>
          );
        })}
      </Types>
    </Container>
  );
}, (prevProps, nextProps)=>{
  return prevProps.data.name === nextProps.data.name;
});

export default Pokemon;
