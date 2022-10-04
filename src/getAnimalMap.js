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

const getSpeciesBySex = (options) => {
  const speciesBySex = locations.map((location) => {
    const speciesFilter = species.filter((animal) => animal.location === location);
    if (options.sex && options.sorted) {
      return {
        [location]: speciesFilter
          .map((animal) => ({ [animal.name]: animal.residents
            .filter((resident) => resident.sex === options.sex).map((anm) => anm.name).sort() })),
      };
    }
    return {
      [location]: speciesFilter
        .map((animal) => ({ [animal.name]: animal.residents
          .filter((resident) => resident.sex === options.sex).map((anm) => anm.name) })),
    };
  });
  return speciesBySex.reduce((obj, item) => Object.assign(obj, item), {});
};

const getSpeciesWithNames = (options) => {
  const speciesWithNames = locations.map((location) => {
    const speciesFilter = species.filter((animal) => animal.location === location);
    if (options.sex) {
      return getSpeciesBySex(options);
    }
    if (options.sorted && !options.sex) {
      return { [location]: speciesFilter
        .map((animal) => ({ [animal.name]: animal.residents
          .map((resident) => resident.name).sort() })) };
    }
    return { [location]: speciesFilter.map((animal) => ({ [animal.name]: animal.residents
      .map((resident) => resident.name) })) };
  });
  return speciesWithNames.reduce((obj, item) => Object.assign(obj, item), {});
};

const getAnimalMap = (options) => {
  if (!options || (options.sex && !options.includeNames)) {
    return getSpeciesLocation();
  }
  if (options.includeNames) {
    return getSpeciesWithNames(options);
  }
};

module.exports = getAnimalMap;
