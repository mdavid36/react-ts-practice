import React, { Component } from 'react'
import User from '../models/User.interface';

export class PokemonSearch extends Component<User> {
  render() {
    const { name, numberOfPokemon } = this.props
    console.log('>>>>> this.props', this.props);
    return (
      <div>
        {name} {numberOfPokemon && <span>has {numberOfPokemon} pokemon</span>}
      </div>
    )
  }
}

export default PokemonSearch
