import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pockemon from './components/Pokemon';
import PokemonDetail from './components/PokemonDetail';
import ErrorBoundary from './components/ErrorBoundary';
import ComparePokemon from './components/ComparePokemon';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Pockemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/compare" element={<ComparePokemon />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
