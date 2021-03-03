import { useState, useEffect, useCallback } from "react";
import API from "../apis/poke";

const usePokemon = () => {
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [pokemons, setPokemonsData] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

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

  const getPage = useCallback(async () => {
    setLoading(true);
    const { data } = await API.get(url);
    await loadPokemons(data.results);

    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    console.log("MOUNTING HOOK");
  }, []);

  useEffect(() => {
    getPage();
    return function cleanup() {};
  }, [getPage]);

  const setPokemons = (direction) => {
    if (direction === "next") {
      setUrl(nextUrl);
    } else {
      setUrl(previousUrl);
    }
  };

  return [[...pokemons], setPokemons, loading];
};

export default usePokemon;
