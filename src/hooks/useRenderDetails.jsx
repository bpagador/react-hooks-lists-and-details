import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getSingleCharacter } from '../services/APIcalls';


export const useRenderDetails = () => {
  const [character, setCharacter] = useState([]);
  const match = useRouteMatch('/:name');
    
  useEffect(() => {
    getSingleCharacter(match.params.name)
      .then(fetchSingle => setCharacter(fetchSingle));
  });

  return {
    character
  };
};
