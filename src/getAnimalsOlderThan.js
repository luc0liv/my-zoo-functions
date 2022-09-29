const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalFiltered = data.species.filter((spec) => spec.name === animal);
  const [species] = animalFiltered;
  return species.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
