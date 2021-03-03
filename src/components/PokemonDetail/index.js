import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  InnerContainer,
  Image,
  Name,
  Types,
  Type,
  BodyStats,
  BodyStatsWrapper,
  Button,
  StatsWrapper,
  StatsRow,
  StatsBarContainer,
  StatsBar,
  statsColors,
  Wrapper,
} from "./styles";
import { typeColors } from "../../styles/Colors";
import API from "../../apis/poke";

const PokemonDetail = ({ location }) => {
  console.log("LOCATION ", location);
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(location.pokemon);

  useEffect(() => {
    let isMounted = true;
    console.log("MOUNT DETAILS");
    const loadPokemon = async (id) => {
      let pokemonData = await (await API.get(id)).data;
      if (isMounted) {
        setPokemon(pokemonData);
      }
    };
    if (!pokemon) {
      loadPokemon(id);
    }
    return function cleanup() {
      isMounted = false;
    };
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <Image src={pokemon.sprites.front_default} />
          <Name>{pokemon.name}</Name>
          <Types>
            {pokemon.types.map((type) => {
              return (
                <Type
                  key={type.type.name}
                  style={{ background: typeColors[type.type.name] }}
                >
                  {type.type.name}
                </Type>
              );
            })}
          </Types>
          <BodyStats>
            <BodyStatsWrapper>
              <h4>{pokemon.height / 10} m</h4> <h4>{pokemon.weight / 10} kg</h4>
            </BodyStatsWrapper>
            <BodyStatsWrapper>
              <h5>Height</h5>
              <h5>Weight</h5>
            </BodyStatsWrapper>
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
                    style={{
                      width: `${percent}%`,
                      background: statsColors[stat.stat.name],
                    }}
                  >
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
      <Button>
        <Link to="/">Back</Link>
      </Button>
    </Container>
  );
};

export default PokemonDetail;
