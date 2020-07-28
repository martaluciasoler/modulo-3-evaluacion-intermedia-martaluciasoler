import React from 'react';
import ComponenteHija from './ComponenteHija';
import '../stylesheets/ComponenteMadre.scss';

const ComponenteMadre = (props) => {
  const items = props.pokemons.map((pokemon, index) => {
    return (
      <li>
        <ComponenteHija
          name={pokemon.name}
          url={pokemon.url}
          types={pokemon.types}
          evolution={pokemon.evolution}
        />
      </li>
    );
  });
  return <ul>{items}</ul>;
};

export default ComponenteMadre;
