import React from 'react';
import PokemonItem from './PokemonItem';
import '../stylesheets/PokemonList.scss';

class PokemonList extends React.Component {
  render() {
    const result = this.props.Pokemons.map((pokemon, index) => {
      return (
        <PokemonItem
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          url={pokemon.url}
        />
      );
    });
    return (
      <ul>
        <li>{result}</li>
      </ul>
    );
  }
}

export default PokemonList;
