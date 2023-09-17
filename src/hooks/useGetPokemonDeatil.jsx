import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pokemonService } from "@/api/pokemon";
import { useNotification } from "@/context/notification.context";
import { mapPokemonDataDetail } from "@/utils/mapPokemonData";
import { GENERAL_ERROR, NOTIFY_TYPES } from "@/const";

/**
 * Custom hook for fetching and managing Pokémon details.
 * @returns {Array} An array containing the Pokémon data.
 */

const useGetPokemonDeatil = () => {
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const { notify } = useNotification();
  const navigate = useNavigate();
  const location = useLocation();
  const searchPokemon = new URLSearchParams(location.search).get("name");

  /**
   * Fetches Pokémon information and updates the state.
   */

  const getPokemonInfo = async () => {
    try {
      setIsLoadingPokemon(true);
      const result = await pokemonService.getPokemonByName(searchPokemon);
      const pokemon = mapPokemonDataDetail(result.data);
      setPokemon(pokemon);
    } catch (error) {
      notify(GENERAL_ERROR.MESAGE , NOTIFY_TYPES.ERROR);
      navigate("/");
    } finally {
      setIsLoadingPokemon(false);
    }
  };

 /*
  * Effect for fetching Pokémon information when the component mounts or when the searchPokemon value changes.
  */

  useEffect(() => {
    getPokemonInfo();
  }, [searchPokemon]);

  return [
    pokemon,
    isLoadingPokemon
  ];

};

export default useGetPokemonDeatil;