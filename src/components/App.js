import React from 'react';
import Pokemons from '../data/pokemons.json';
import PokemonList from './PokemonList';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="tittle">POKÉMONS</h1>
        <h2>ポケットモンスター</h2>
        <PokemonList Pokemons={Pokemons} />
        <span className="span">¡Hazte con todos!</span>
      </div>
    );
  }
}

export default App;
