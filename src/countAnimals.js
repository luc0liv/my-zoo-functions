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

  const getBySpecies = data.species.find((ani) => ani.name === animal.specie).residents.length;

  return getBySpecies;
}

// console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
