import { useState, useEffect } from 'react';
import { getCharacters } from '../services/APIcalls';


export const useDisplayCharacters = () => {
  const [characters, setCharacters] = useState([]);
    
  useEffect(() => {
    getCharacters()
      .then(fetchList => setCharacters(fetchList));
  });

  return {
    characters
  };
};
