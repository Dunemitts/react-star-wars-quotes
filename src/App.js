// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './Character';
import { DATA } from './data';

function App() {
  const [characters, setCharacters] = useState(DATA);

  return (
    <div className="container">
      {characters.map((character, index) => (
        <Character key={index} name={character.name} quotes={character.quotes} />
      ))}
    </div>
  );
}

export default App;
