import { useState, useEffect } from "react";
import API from "../apis/poke";
 
const usePokemon = () => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemonsData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
     async function getPage (){
      setLoading(true);
      const { data } = await API.get('',{params: {limit, offset}});
      const pokemons = await loadPokemons(data.results);
      setPokemonsData(pokemons);
      setLoading(false);
    };

    getPage();
  },[offset]);

  const loadPokemons = async (data) => {
    return await Promise.all(
      data.map(async (pokemon) => {
        let id = pokemon.url.split("pokemon/")[1].split("/")[0];
        let pokemonInfo = await (await API.get(id)).data;
        return pokemonInfo;
      })
    );
  };

  const setPokemons = (direction) => {
    if (direction === "next") {
      setOffset(offset+ limit)
    } else if(offset-limit>=0){
      setOffset(offset-limit)
    }
  };

  return [pokemons, setPokemons, loading];
};

export default usePokemon;
