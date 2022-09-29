const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  return data.species.filter((spec) => ids.some((id) => spec.id === id));
}

module.exports = getSpeciesByIds;
