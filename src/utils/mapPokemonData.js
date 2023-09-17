export const mapPokemonData = (pokemonData) => {
  return {
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
    id: pokemonData.id,
    abilities: pokemonData.abilities?.map((abilityData) => ({
      name: abilityData.ability.name,
    })),
  };
};

export const mapPokemonDataDetail = (pokemonData)  => {
  return {
    title: pokemonData.name,
    id: pokemonData.id,
    imageSrc: pokemonData.sprites.front_default,
    moves: pokemonData.moves?.slice(0, 2).map((moves) => ({
      name: moves.move.name,
    })),
  };
}