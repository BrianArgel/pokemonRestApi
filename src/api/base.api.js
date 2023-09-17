import axios from "axios";

const BASE_URL_LOGIN = "http://localhost:3001/";
const BASE_URL_POKEMON = "https://pokeapi.co/api/v2/";

export const instanceLoginApi = axios.create({
  baseURL: BASE_URL_LOGIN
});

export const instancePokemonApi = axios.create({
  baseURL: BASE_URL_POKEMON
});