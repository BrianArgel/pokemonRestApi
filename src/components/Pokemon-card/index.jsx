import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NO_IMAGE } from "@/const";

export const PokemonCard = (props) => {

  /**
   * PokemonCard component for displaying information about a Pokémon.
   *
   * @component
   * @param {object} props - The props for this component.
   * @param {string} props.title - The title or name of the Pokémon.
   * @param {string} props.imageSrc - The URL of the Pokémon's image.
   * @param {Array} props.abilities - An array of abilities the Pokémon possesses.
   * @returns {JSX.Element} - The rendered component.
   */

  const {
    title,
    imageSrc,
    abilities
  } = props;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-green-500">
      <div className="bg-green-400">
        <div className="flex justify-center items-center h-48 relative">
          <img src={imageSrc ? imageSrc : NO_IMAGE} alt={title} className="w-300 h-48 object-cover" />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex flex-wrap">
          {abilities.map((ability, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {ability.name}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={{
            pathname: "/pokemon",
            search: `?name=${title}`
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out block text-center">
          Conóceme
        </Link>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonCard;
