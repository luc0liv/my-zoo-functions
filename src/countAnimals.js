const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const species = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});

    return species;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
