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

  if (!animal.sex) {
    const getBySpecies = data.species.find((ani) => ani.name === animal.specie).residents.length;
    return getBySpecies;
  }

  const getBySpeciesAndSex = data.species.find((ani) => ani.name === animal.specie);
  const teste = getBySpeciesAndSex.residents.filter((el) => el.sex === 'female');
  return teste.length;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
