const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const species = data.species.reduce((acc, currObj) => {
      const newObj = acc;
      newObj[currObj.name] = currObj.residents.length;
      return newObj;
    }, {});

    return species;
  }

  const getBySpecies = data.species.find((species) => species.name === animal.specie);
  if (!animal.sex) {
    return getBySpecies.residents.length;
  }

  const filterBySex = getBySpecies.residents.filter((species) => species.sex === 'female');
  return filterBySex.length;
}

module.exports = countAnimals;
