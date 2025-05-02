import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShimerUi from "./ShimerUi";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolution, setEvolution] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);

      const speciesRes = await fetch(data.species.url);
      const speciesData = await speciesRes.json();
      const evoRes = await fetch(speciesData.evolution_chain.url);
      const evoData = await evoRes.json();
      setEvolution(evoData);
    } catch (err) {
      console.error("Error fetching detail:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  if (loading) return <ShimerUi />
  if (!pokemon) return <div className="text-center py-8 text-lg font-semibold">Not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Link to="/" className="text-blue-600 hover:underline text-sm">&larr; Back to List</Link>

      <div className="mt-6 bg-white shadow-md rounded-xl p-6">
        <div className="text-center">
          <img
            src={pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-40 h-40 mx-auto"
          />
          <h1 className="text-3xl font-bold capitalize mt-4">{pokemon.name}</h1>
        </div>

        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Stats</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="bg-gray-100 p-2 rounded-md text-center">
                  <span className="font-semibold capitalize">{stat.stat.name}</span>: {stat.base_stat}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {pokemon.abilities.map((a) => (
                <li
                  key={a.ability.name}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize"
                >
                  {a.ability.name}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Moves <span className="text-base font-normal">(first 10)</span></h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {pokemon.moves.slice(0, 10).map((m) => (
                <li
                  key={m.move.name}
                  className="bg-green-100 text-green-800 p-2 rounded-md capitalize"
                >
                  {m.move.name}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Evolution Chain</h2>
            <ul className="text-sm flex flex-col gap-1">
              {evolution?.chain && (
                <>
                  <li className="capitalize font-medium text-gray-800">
                    {evolution.chain.species.name}
                  </li>
                  {evolution.chain.evolves_to.map((e1) => (
                    <li key={e1.species.name} className="pl-4">
                      &rarr; {e1.species.name}
                      {e1.evolves_to.map((e2) => (
                        <div key={e2.species.name} className="pl-8">
                          &rarr; {e2.species.name}
                        </div>
                      ))}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
