import React from 'react';
import Characters from '../components/Characters/Characters';
import { useDisplayCharacters } from '../hooks/useDisplayCharacter';

const DisplayCharacters = () => {
  const {
    handleClick,
    characters,
    page
  } = useDisplayCharacters();

  return (
    <>
      {page > 1 && <button name='Prev'onClick={handleClick}>Prev</button>}
      {page < 11 && <button name='Next' onClick={handleClick}>Next</button>}
    

      <Characters characters={characters} />
    </>
    
  );

};

export default DisplayCharacters;
