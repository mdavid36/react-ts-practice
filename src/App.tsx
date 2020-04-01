import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch'

function App() {
  return (
    <div className="App">
      <PokemonSearch name= "Matt" numberOfPokemon= {36}/>
    </div>
  );
}

export default App;
