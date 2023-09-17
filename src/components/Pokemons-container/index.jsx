import React from "react";
import { PokemonCard } from "../Pokemon-card";
import Pagination from "@/common/Pagination";
import Loader from "@/common/Loader";
import useGetPokemons from "../../hooks/useGetPokemons"
import MenuTitle from "@/common/MenuTitle";

export const PokemonsContainer = () => {

  const [
    pokemons,
    isLoadingPokemons,
    count,
    page,
    nextPage,
    prevPage,
  ] = useGetPokemons();

  if (isLoadingPokemons === true) {
    return (
      <Loader />
    );
  }

  return (
    <div className="container mx-auto p-4 mt-6">
      <MenuTitle
        title={"Sección Lista Pokemones"}
        subTitle={" Subtítulo con una casita"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            title={pokemon.name}
            imageSrc={pokemon.image}
            abilities={pokemon.abilities}
          />
        ))}
      </div>

      <Pagination
        page={page}
        count={count}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default PokemonsContainer;