import React from 'react';
import './PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
  const { name, id, sprites, types } = pokemon;

  const typeColors = {
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    psychic: '#F95587',
    ice: '#96D9D6',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
  };

  return (
    <div className="pokemon-card" style={{ borderColor: typeColors[types[0].type.name] }}>
      <h2 className="pokemon-name">{name}</h2>
      <div className="pokemon-id">#{id}</div>
      <img src={sprites.front_default} alt={name} />
      <img src={sprites.front_shiny} alt={`${name} shiny`} />
      <ul className="pokemon-types">
        {types.map((typeInfo) => (
          <li
            key={typeInfo.type.name}
            className="pokemon-type"
            style={{ backgroundColor: typeColors[typeInfo.type.name] }}
          >
            {typeInfo.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;
