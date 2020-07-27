import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => {
  return (
    <section>
      <h4>{name}</h4>
      <img src={image} alt={name} width="250" />
    </section>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
