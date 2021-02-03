import React from "react";
import NavBar from "./components/NavBar";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Button, ButtonsWrapper } from "./styles/AppStyle";
import poke from "./apis/poke";
import PokemonList from "./components/PokemonList";

class App extends React.Component {
  state = { nextUrl: "", prevUrl: "", loading: true, pokemonData: [] };

  componentDidMount() {
    this.getPage(this.state.nextUrl);
  }

  getPage = async (url) => {
    const { data } = await poke.get(url);
    console.log(data);
    await this.loadPokemons(data.results);
    this.setState({
      nextUrl: data.next,
      prevUrl: data.previous,
      loading: false,
    });
    console.log(this.state.pokemonData);
  };

  loadPokemons = async (data) => {
    let pokemons = await Promise.all(
      data.map(async (pokemon) => {
        let id = pokemon.url.split("pokemon/")[1].split("/")[0];
        let pokemonInfo = await (await poke.get(id)).data;
        return pokemonInfo;
      })
    );
    this.setState({ pokemonData: pokemons });
  };

  handleClick = (url) => {
    this.setState({ loading: true });
    this.getPage(url);
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <NavBar />
        <>
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <PokemonList pokemons={this.state.pokemonData} />
            </>
          )}
        </>
        <ButtonsWrapper>
          <Button
            disabled={this.state.prevUrl ? false : true}
            onClick={() => this.handleClick(this.state.prevUrl)}
          >
            Previus
          </Button>
          <Button onClick={() => this.handleClick(this.state.nextUrl)}>
            Next
          </Button>
        </ButtonsWrapper>
      </>
    );
  }
}

export default App;
