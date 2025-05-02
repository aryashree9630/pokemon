import React, { useState } from "react";

const ComparePokemon = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [error, setError] = useState("");

  const fetchPokemon = async (name, setter) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!res.ok) throw new Error("Not Found");
      const data = await res.json();
      setter(data);
      setError("");
    } catch {
      setError("One or both Pokémon not found.");
    }
  };

  const handleCompare = () => {
    if (first && second) {
      fetchPokemon(first, setFirstData);
      fetchPokemon(second, setSecondData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Compare Pokémon Stats</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="First Pokémon"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Second Pokémon"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleCompare}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Compare
        </button>
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {firstData && secondData && (
        <div className="grid grid-cols-2 gap-4 text-sm">
          {[firstData, secondData].map((pokemon, idx) => (
            <div key={pokemon.name} className="bg-white rounded shadow p-4">
              <h3 className="text-center text-xl font-bold capitalize">{pokemon.name}</h3>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-24 mx-auto"
              />
              <ul className="mt-2 space-y-1">
                {pokemon.stats.map((s) => (
                  <li key={s.stat.name}>
                    <strong>{s.stat.name}:</strong> {s.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparePokemon;
