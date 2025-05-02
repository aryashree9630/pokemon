import { useEffect, useState } from "react";
import { API } from "./Constant";

const useFilteredPockemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedData = data.results.map(async (poke) => {
        const res = await fetch(poke.url);
        return await res.json();
      });

      const fullData = await Promise.all(detailedData);
      setPokemon(fullData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon, loading, error };
};

export default useFilteredPockemon;
