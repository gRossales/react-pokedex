import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../Pokemon";
import { Container, Button } from "./styles";

const PokemonList = ({pokemons, setPokemons, loading}) => {
  
  useEffect(() => {
    console.log("mounting pokemon list");
    return ()=> console.log("unmounting pokemon list");
  },[])

  const renderedList = pokemons?.map((pokemon,index) => {
    return (
      <Link
        to={{ pathname: `/pokemon/${pokemon.id}`, pokemon }}
        key={pokemon.id}
        style={{"gridArea": `pokemon${index+1}`}}
      >
        <Pokemon data={pokemon} />
      </Link>
    );
  })

  return (
    <Container>
      {loading ? <h1>Loading...</h1> : renderedList}

      <Button onClick={() => setPokemons("previous")}>
        Previous
      </Button>
      <Button onClick={() => setPokemons("next")}>
        Next
      </Button>
    </Container>
  );
};

export default PokemonList;
