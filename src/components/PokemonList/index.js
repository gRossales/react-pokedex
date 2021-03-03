import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../Pokemon";
import { Container, ListWrapper, ButtonsWrapper, Button } from "./styles";

const PokemonList = ({ pokemons, onPageChange, loading }) => {
  useEffect(() => {}, []);

  const renderedList = pokemons?.map((pokemon) => {
    return (
      <Link
        to={{ pathname: `/pokemon/${pokemon.id}`, pokemon }}
        key={pokemon.id}
      >
        <Pokemon data={pokemon} />
      </Link>
    );
  });
  return (
    <Container>
      <ListWrapper>{loading ? <h1>Loading...</h1> : renderedList}</ListWrapper>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            onPageChange("previous");
          }}
        >
          Previus
        </Button>
        <Button
          onClick={() => {
            onPageChange("next");
          }}
        >
          Next
        </Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default PokemonList;
