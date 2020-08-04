import React from 'react';
import '../stylesheets/PokemonItem.scss';

class PokemonItem extends React.Component {
  render() {
    const eachType = this.props.types.map((type, index) => {
      return <h4 key={index}>{type}</h4>;
    });

    return (
      <div className="poke-item">
        <h2 className="pokemon__title">{this.props.name}</h2>
        <img className="image" alt={this.props.name} src={this.props.url} />
        <div className="types">{eachType}</div>
      </div>
    );
  }
}

export default PokemonItem;
