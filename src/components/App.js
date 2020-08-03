import React from 'react';
import Pokemons from '../data/pokemons.json';
import PokemonList from './PokemonList';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <PokemonList Pokemons={Pokemons} />
      </div>
    );
  }
}

export default App;
