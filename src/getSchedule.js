const data = require('../data/zoo_data');

const { species, hours } = data;

const getGeneralSchedule = () => {
  const hoursKeys = Object.keys(hours);
  const scheduling = hoursKeys.map((key) => ({ [key]: {
    officeHour: key === 'Monday'
      ? 'CLOSED'
      : `Open from ${hours[key].open}am until ${hours[key].close}pm`,
    exhibition: key === 'Monday'
      ? 'The zoo will be closed!'
      : species.filter((spec) => spec.availability.includes(key))
        .map((spec) => spec.name),
  } }));

  return scheduling;
};

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    const getScheduling = getGeneralSchedule();
    // Solução encontrada aqui:
    // https://stackoverflow.com/questions/19874555/how-do-i-convert-array-of-objects-into-one-object-in-javascript
    return getScheduling.reduce((obj, item) => Object.assign(obj, item), {});
  }
  const getAnimalSchedule = species
    .find((spec) => spec.name === scheduleTarget).availability;
  return getAnimalSchedule;
};

module.exports = getSchedule;
