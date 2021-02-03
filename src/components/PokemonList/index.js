import React from "react";
import Pokemon from "../Pokemon";

import { Buttons, Container } from "./styles";

const PokemonList = ({ pokemons }) => {
  const renderedList = pokemons.map((pokemon) => {
    return <Pokemon data={pokemon} key={pokemon.id} />;
  });
  return <Container>{renderedList}</Container>;
};

export default PokemonList;
