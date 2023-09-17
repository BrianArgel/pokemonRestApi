import { instancePokemonApi } from "./base.api";

export const pokemonService = {
  getAll: function(limit, offset) {
    return instancePokemonApi.get(`pokemon?limit=${limit}&offset=${offset}`);
  },
  
  getPokemonByUrl: function(pokemonId) {
    return instancePokemonApi.get(`pokemon/${pokemonId}`);
  },

  getPokemonByName: function(pokemonName) {
    return instancePokemonApi.get(`pokemon/${pokemonName}`);
  }
};