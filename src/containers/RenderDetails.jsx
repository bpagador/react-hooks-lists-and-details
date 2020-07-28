import React from 'react';
import Character from '../components/Characters/Character';
import { useRenderDetails } from '../hooks/useRenderDetails';

const RenderDetails = () => {
  const {
    character
  } = useRenderDetails();

  return (
    <Character {...character}/>
  );

};

export default RenderDetails;
