import React from "react";
import useGetPokemonDeatil from "@/hooks/useGetPokemonDeatil";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { NO_IMAGE } from "@/const";

export const PokemonInfo = () => {
  const [pokemon] = useGetPokemonDeatil();
  const { title, imageSrc, moves } = pokemon;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg relative text-center w-full">
        <Link to="/" className="absolute top-0 left-0 p-4 text-gray-600 hover:text-gray-800">
          <FaArrowLeft className="w-6 h-6" />
        </Link>
        <div className="flex justify-center items-center h-64 relative">
          <img src={imageSrc ? imageSrc : NO_IMAGE} alt={title} className="w-96 h-64 object-cover" />
        </div>
        <div className="font-bold text-3xl mb-4">{title}</div>
        <div className="flex flex-wrap">
          {moves?.map((move, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {move?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
