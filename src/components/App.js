import React from 'react';
import ComponenteMadre from './ComponenteMadre';
import '../stylesheets/App.scss';
import PokemonsFromApi from '../data/pokemons.json';
console.log(PokemonsFromApi);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: PokemonsFromApi,
    };
  }
  render() {
    return (
      <div>
        <ComponenteMadre pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
