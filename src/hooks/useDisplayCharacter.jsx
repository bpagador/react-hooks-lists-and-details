import { useState, useEffect } from 'react';
import { getCharacters } from '../services/APIcalls';


export const useDisplayCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const handleClick = ({ target }) => {
    if(target.name === 'Next') setPage(page => page + 1);
    if(target.name === 'Prev') setPage(page => page - 1);
  };
    
  useEffect(() => {
    getCharacters(page)
      .then((fetchList) => {
        setCharacters(fetchList);
      });
  }, [page]);

  return {
    characters,
    handleClick,
    page
  };
};
