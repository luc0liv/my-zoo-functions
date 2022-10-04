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

const getAnimalMap = (options) => {
  if (!options) {
    return getSpeciesLocation();
  }
};

module.exports = getAnimalMap;
