import React from "react";

const SortOptions = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex justify-end items-center gap-2 p-4 flex-wrap">
      <label className="text-gray-700 font-medium">Sort by:</label>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border rounded px-3 py-1"
      >
        <option value="id-asc">ID (Low to High)</option>
        <option value="id-desc">ID (High to Low)</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default SortOptions;
