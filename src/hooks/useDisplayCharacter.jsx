import { useState, useEffect } from 'react';
import { getCharacters } from '../services/APIcalls';


export const useDisplayCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const handleClickNext = () => {
    setPage(page => page + 1);
  };

  const handleClickPrev = () => {
    setPage(page => page - 1);
  };
    
  useEffect(() => {
    getCharacters(page)
      .then((fetchList) => {
        setCharacters(fetchList);
      });
  }, [page]);

  return {
    characters,
    handleClickNext,
    handleClickPrev
  };
};
