import { useState, useEffect } from "react";
import API from "../apis/poke";

const usePokemon = () => {
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [pokemons, setPokemonsData] = useState([]);

  const loadPokemons = async (data) => {
    let pokemons = await Promise.all(
      data.map(async (pokemon) => {
        let id = pokemon.url.split("pokemon/")[1].split("/")[0];
        let pokemonInfo = await (await API.get(id)).data;
        return pokemonInfo;
      })
    );
    setPokemonsData(pokemons);
  };

  const getPage = async (url) => {
    const { data } = await API.get(url);
    console.log(data);
    await loadPokemons(data.results);

    setNextUrl(data.next);
    setPreviousUrl(data.previous);

    console.log(pokemons);
  };

  useEffect(() => {
    getPage(previousUrl);
  }, []);

  const setPokemons = (direction) => {
    if (direction === "next") {
      getPage(nextUrl);
    } else {
      getPage(previousUrl);
    }
  };

  return [pokemons, setPokemons];
};

export default usePokemon;
