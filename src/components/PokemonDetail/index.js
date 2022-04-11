import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Container,
  InnerContainer,
  Types,
  Type,
  BodyStats,
  StyledLink,
  StatsWrapper,
  Wrapper,
} from "./styles";
import API from "../../apis/poke";
import StatsBar from '../StatsBar';

const PokemonDetail = () => {
  const { id } = useParams();
  let location = useLocation();

  const [pokemon, setPokemon] = useState(location.state || null);

  useEffect(() => {
    const loadPokemon = async (id) => {
      let pokemonData = await (await API.get(id)).data;
      setPokemon(pokemonData);
    };
    if (!pokemon) {
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
            return (
              <StatsBar key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
            );
          })}
        </StatsWrapper>
      </InnerContainer>
      <StyledLink to="/">Back</StyledLink>
    </Container>
  );
};

export default PokemonDetail;
