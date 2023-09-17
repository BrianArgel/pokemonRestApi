import { useState, useEffect } from "react";
import { pokemonService } from "@/api/pokemon";
import { useNotification } from "@/context/notification.context";
import { mapPokemonData } from "@/utils/mapPokemonData";
import { NOTIFY_TYPES, GENERAL_ERROR } from "@/const";

const useGetPokemons = () => {
  const { notify } = useNotification();
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [pagination] = useState({ limit: 10, offset: 10 });

  const nextPage = () => {
    setPage(prev => prev + 1);
  };

  const prevPage = () => {
    setPage(prev => prev - 1);
  };

  const getAllPokemons = async () => {
    const { limit, offset } = pagination;
    setIsLoadingPokemons(true);
    try {
      const response = await pokemonService.getAll(limit, offset * page);
      setCount(Math.ceil(response.data.count / 10));
      const pokemons = response.data.results;
      const promises = pokemons.map(async (pokemon) => {
        const pokemonId = pokemon.url.split("/")[6];
        const response = await pokemonService.getPokemonByUrl(pokemonId);
        return response;
      });

      const results = await Promise.all(promises);
      const data = results.map((pokemon) => mapPokemonData(pokemon.data))
      setPokemons(data);
    } catch (error) {
      notify(GENERAL_ERROR, NOTIFY_TYPES.ERROR);
    } finally {
      setIsLoadingPokemons(false);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, [page]);

  return [
    pokemons,
    isLoadingPokemons,
    count,
    page,
    nextPage,
    prevPage,
    getAllPokemons
  ];
};


export default useGetPokemons;