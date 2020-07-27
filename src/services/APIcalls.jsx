export const getSingleCharacter = name => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json())
    .then(([character]) => ({
      name: character.name,
      image: character.image
    }));
};

export const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      name: character.name,
      image: character.image
    })));

};
