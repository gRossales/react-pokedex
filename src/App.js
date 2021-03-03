import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { GlobalStyles } from "./styles/GlobalStyles";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import usePokemon from "./hooks/usePokemon";

const App = () => {
  const [pokemons, setPokemons, loading] = usePokemon();

  useEffect(() => {
    setPokemons("");
  }, []);

  useEffect(() => {}, [loading]);

  const onPageChange = (direction) => {
    if (direction === "next") {
      setPokemons("next");
    } else {
      setPokemons("previous");
    }
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <PokemonList
              pokemons={pokemons}
              onPageChange={onPageChange}
              loading={loading}
            />
          )}
        />
        <Route
          path="/pokemon/:id"
          exact
          render={(props) => <PokemonDetail {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
