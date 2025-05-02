import PockemonCards from "./PockemonCards";

const PockemonList = ({ data }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
    {data.map((pokemon) => (
      <PockemonCards key={pokemon.id} pokemonData={pokemon} />
    ))}
  </ul>
);
export default PockemonList;
