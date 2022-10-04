const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

const getSpeciesLocation = () => {
  const speciesLocations = locations.map((location) => (
    {
      [location]: species.filter((animal) => animal.location === location)
        .map((animal) => animal.name),
    }
  ));
  return speciesLocations.reduce((obj, item) => Object.assign(obj, item), {});
};

const getSpeciesWithNames = (options) => {
  const speciesWithNames = locations.map((location) => (
    {
      [location]: species.filter((animal) => animal.location === location)
        .map((animal) => ({ [animal.name]: animal.residents
          .map((resident) => resident.name) })),
    }
  ));
  return speciesWithNames.reduce((obj, item) => Object.assign(obj, item), {});
};

const getAnimalMap = (options) => {
  if (!options) {
    return getSpeciesLocation();
  }
  if (options.includeNames) {
    return getSpeciesWithNames();
  }
};

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
