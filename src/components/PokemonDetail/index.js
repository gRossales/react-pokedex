import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  InnerContainer,
  Types,
  Type,
  BodyStats,
  StyledLink,
  StatsWrapper,
  StatsRow,
  StatsBarContainer,
  StatsBar,
  statsColors,
  Wrapper,
} from "./styles";
import API from "../../apis/poke";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    console.log("MOUNT DETAILS");
    const loadPokemon = async (id) => {
      let pokemonData = await (await API.get(id)).data;
      setPokemon(pokemonData);
    };
    if (!pokemon) {
      console.log("loading POKEMON!!!!")
      loadPokemon(id);
    }
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <Types>
            {pokemon.types.map((type) => {
              return (
                <Type
                  key={type.type.name}
                  background={"--" + type.type.name}
                >
                  {type.type.name}
                </Type>
              );
            })}
          </Types>
          <BodyStats>
            <div>
              <h4>{pokemon.height / 10} m</h4> <h4>{pokemon.weight / 10} kg</h4>
            </div>
            <div>
              <h5>Height</h5>
              <h5>Weight</h5>
            </div>
          </BodyStats>
        </Wrapper>
        <StatsWrapper>
          <h4>Base Stats</h4>
          {pokemon.stats.map((stat) => {
            const percent = stat.base_stat / 3;
            return (
              <StatsRow key={stat.stat.name}>
                <h5>{stat.stat.name}</h5>
                <StatsBarContainer>
                  <StatsBar
                      width={`${percent}%`}
                      background={"--"+stat.stat.name}>
                    <p
                      style={
                        percent < 16
                          ? {
                            position: "relative",
                            right: "-7ch",
                          }
                          : null
                      }
                    >
                      {stat.base_stat}/300
                    </p>
                  </StatsBar>
                </StatsBarContainer>
              </StatsRow>
            );
          })}
        </StatsWrapper>
      </InnerContainer>
      <StyledLink to="/">Back</StyledLink>
    </Container>
  );
};

export default PokemonDetail;
