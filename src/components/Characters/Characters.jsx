import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character';

const Characters = ({ characters }) => {
  const characterList = characters.map(character => (
    <li key={character.name}>
      <Link to={`/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired 
};

export default Characters;
