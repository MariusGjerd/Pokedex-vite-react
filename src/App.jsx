import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Logo from './components/Logo/Logo';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';
import PokemonList from './components/PokemonList/PokemonList';

function App() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");


  return (
    <Router>
      <div className="App">
        <Logo />
        <SearchBar onSearch={setSearch} />
        <Filter onFilter={setFilter} />
        <Routes>
        <Route path="/" element={<PokemonList search={search} filter={filter} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
