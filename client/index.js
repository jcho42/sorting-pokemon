/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const pokemonIds = [25, 9, 3, 34, 57, 131];
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello Pokemon</h1>
      <h2 style={{ textAlign: 'center' }}>Let's Get Sorted</h2>
      <button>Sort!</button>
      <div>
        {pokemonIds.map((id) => {
          return (
            <img
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
