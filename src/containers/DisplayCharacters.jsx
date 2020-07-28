import React from 'react';
import Characters from '../components/Characters/Characters';
import { useDisplayCharacters } from '../hooks/useDisplayCharacter';

const DisplayCharacters = () => {
  const {
    handleClickNext,
    handleClickPrev,
    characters
  } = useDisplayCharacters();

  return (
    <>
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
    
      <Characters characters={characters} />
    </>
    
  );

};

export default DisplayCharacters;
