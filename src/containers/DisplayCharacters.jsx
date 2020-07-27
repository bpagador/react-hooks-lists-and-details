import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/APIcalls';
import Characters from '../components/Characters/Characters';

const DisplayCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchList => setCharacters(fetchList));
  }, []);

  return (
    <Characters characters={characters} />
  );

};

export default DisplayCharacters;
