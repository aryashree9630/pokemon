import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonData }) => {
  const {
    id,
    name,
    height,
    weight,
    base_experience,
    sprites,
    types,
    stats,
    abilities,
  } = pokemonData;

  return (
    <Link to={`/pokemon/${id}`} className="block">
      <li className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition-transform duration-300 transform hover:scale-105 list-none">
        <figure className="flex justify-center mb-4">
          <img
            src={sprites?.other?.dream_world?.front_default || sprites?.front_default}
            alt={name}
            className="w-28 h-28 object-contain"
          />
        </figure>

        <h1 className="text-lg font-bold text-center capitalize mb-1">
          {name}
        </h1>

        <p className="text-center text-sm text-gray-500 mb-3 capitalize">
          {types.map((t) => t.type.name).join(", ")}
        </p>

        <div className="grid grid-cols-3 gap-3 text-xs text-center mb-3">
          <div>
            <span className="font-semibold block text-gray-700">Height</span>
            {height}
          </div>
          <div>
            <span className="font-semibold block text-gray-700">Weight</span>
            {weight}
          </div>
          <div>
            <span className="font-semibold block text-gray-700">Speed</span>
            {stats.find((s) => s.stat.name === "speed")?.base_stat || "—"}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs text-center">
          <div>
            <span className="font-semibold block text-gray-700">XP</span>
            {base_experience}
          </div>
          <div>
            <span className="font-semibold block text-gray-700">Attack</span>
            {stats.find((s) => s.stat.name === "attack")?.base_stat || "—"}
          </div>
          <div>
            <span className="font-semibold block text-gray-700">Ability</span>
            {abilities[0]?.ability?.name || "—"}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PokemonCard;
