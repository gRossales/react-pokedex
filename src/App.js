import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Button, ButtonsWrapper } from "./styles/AppStyle";
import usePokemon from "./hooks/usePokemon";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = usePokemon();

  useEffect(() => {
    setPokemons("");
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [pokemons]);

  return (
    <>
      <GlobalStyles />
      <NavBar />

      {loading ? <h1>Loading...</h1> : <PokemonList pokemons={pokemons} />}

      <ButtonsWrapper>
        <Button
          onClick={() => {
            setLoading(true);
            setPokemons("previous");
          }}
        >
          Previus
        </Button>
        <Button
          onClick={() => {
            setLoading(true);
            setPokemons("next");
          }}
        >
          Next
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default App;
