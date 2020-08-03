import React from 'react';
import PokemonItem from './PokemonItem';
import '../stylesheets/PokemonList.scss';

class PokemonList extends React.Component {
  render() {
    const result = this.props.Pokemons.map((pokemon, index) => {
      return (
        <li className="poke" key={pokemon.id}>
          <PokemonItem
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            url={pokemon.url}
          />
        </li>
      );
    });
    return (
      <ul>
        <li className="pokes">{result}</li>
      </ul>
    );
  }
}

export default PokemonList;
