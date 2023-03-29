import React from 'react';
import './Logo.scss';
import logoImage from '../../assets/react.svg'


const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Pokedex Logo" className="logo" />
    </div>
  );
};

export default Logo;
