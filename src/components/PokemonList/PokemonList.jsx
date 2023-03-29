import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonList.scss';
import PokemonCard from '../PokemonCards/PokemonCard';

const PokemonList = ({ search, filter }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = [];
      for (let i = 1; i <= 250; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemonData.push(res.data);
      }
      setPokemonList(pokemonData);
    };
  
    fetchPokemon();
  }, []);
  

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    // Filter by type
    if (filter !== "" && !pokemon.types.some((type) => type.type.name === filter)) {
      return false;
    }
  
    // Filter by search
    if (search !== "" && !pokemon.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
  
    return true;
  });
  

  return (
    <div className="pokemon-list">
      {filteredPokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
