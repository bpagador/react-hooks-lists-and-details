import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getSingleCharacter } from '../services/APIcalls';
import Character from '../components/Characters/Character';

const RenderDetails = () => {
  const [character, setCharacter] = useState({});
  const match = useRouteMatch('/:name');

  useEffect(() => {
    getSingleCharacter(match.params.name)
      .then(fetchSingle => setCharacter(fetchSingle));
  }, []);

  return (
    <Character {...character} />
  );

};

export default RenderDetails;
