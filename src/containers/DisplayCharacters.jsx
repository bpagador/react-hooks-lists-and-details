import React from 'react';
import Characters from '../components/Characters/Characters';
import { useDisplayCharacters } from '../hooks/useDisplayCharacter';

const DisplayCharacters = () => {
  const {
    characters
  } = useDisplayCharacters();

  return (
    <Characters characters={characters} />
  );

};

export default DisplayCharacters;
