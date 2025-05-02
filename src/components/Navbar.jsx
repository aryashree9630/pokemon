import React from 'react';
import { FaSearch } from "react-icons/fa";

const Navbar = ({ search, setSearch, typeFilter, setTypeFilter }) => {
  return (
    <nav className="bg-zinc-200 px-6 py-4 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">

        <div className="text-3xl font-bold text-gray-800 font-serif">Pokemon By Arya</div>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <div className="relative w-60">
            <input
              type="text"
              placeholder="Search Pokemon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
            </span>
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white"
          >
            <option value="">All Types</option>
            <option value="grass">Grass</option>
            <option value="water">Water</option>
            <option value="fire">Fire</option>
            <option value="poison">Poison</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
