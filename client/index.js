/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import mergeSort from './mergesort';

const intiialPokemon = [25, 7, 1, 32, 56, 131, 4, 63];

const App = () => {
  const [pokemon, setPokemon] = useState(intiialPokemon);
  const sortPokemon = () => {
    setPokemon(mergeSort(pokemon));
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello Pokemon</h1>
      <h2 style={{ textAlign: 'center' }}>Let's Get Sorted</h2>
      <button onClick={sortPokemon}>Sort!</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemon.map((id) => {
          return (
            <div
              key={id}
              style={{
                border: '1px solid black',
                textAlign: 'center',
                width: '120px',
                height: '120px',
                margin: '10px',
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
              <div>#{id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
