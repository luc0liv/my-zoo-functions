const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const careTaker = data.employees.find((employee) => employee.id === id);
  const firstSpecies = data.species.find((species) => species.id === careTaker.responsibleFor[0]);
  const oldestAnimal = firstSpecies.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr), 0);
  return Object.values(oldestAnimal);
};

module.exports = getOldestFromFirstSpecies;
