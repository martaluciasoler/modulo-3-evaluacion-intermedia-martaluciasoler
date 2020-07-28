import React from 'react';
import '../stylesheets/ComponenteHija.scss';

class ComponenteHija extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <span>{this.props.types}</span>
        <span>{this.props.evolution}</span>
        <img alt={this.props.name} src={this.props.url} />
      </div>
    );
  }
}

export default ComponenteHija;
