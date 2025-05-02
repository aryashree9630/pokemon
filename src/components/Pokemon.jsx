import React, { useState } from "react";
import useFilteredPockemon from "./useFilteredPockemon";
import Navbar from "./Navbar";
import ShimerUi from "./ShimerUi";
import PockemonList from "./PockemonList";
import ItemsPerPage from "./ItemsPerPage";
import Pagination from "./Pagination";
import ErrorComponent from "./ErrorComponent";
import SortOptions from "./SortOptions";

const Pockemon = () => {
  const { pokemon, loading, error } = useFilteredPockemon();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("id-asc");

  const filtered = pokemon.filter((poke) => {
    const matchesSearch = poke.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType =
      !typeFilter || poke.types.some((t) => t.type.name === typeFilter);
    return matchesSearch && matchesType;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const sortedData = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case "id-asc":
        return a.id - b.id;
      case "id-desc":
        return b.id - a.id;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <ShimerUi />;
  if (error)
    return (
      <ErrorComponent
        message={error.message}
        onRetry={() => window.location.reload()}
      />
    );

  return (
    <section className="container mx-auto px-4">
      <Navbar
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <ItemsPerPage
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <PockemonList data={currentData} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
    </section>
  );
};

export default Pockemon;
