import React from 'react';
import Characters from '../components/Characters/Characters';
import { useDisplayCharacter } from '../hooks/useDisplayCharacter';

const DisplayCharacters = () => {
  const {
    characters
  } = useDisplayCharacter();

  return (
    <Characters characters={characters} />
  );

};

export default DisplayCharacters;
