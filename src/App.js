import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import usePokemon from './hooks/usePokemon';
import { GlobalStyle } from "./styles/global";


const App = () => {
  const [pokemons, setPokemons, loading] = usePokemon();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <PokemonList pokemons={pokemons}  setPokemons={setPokemons} loading={loading} />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </>
  );
};

export default App;
