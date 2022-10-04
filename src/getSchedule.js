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
    // Solução encontrada aqui:
    // https://stackoverflow.com/questions/19874555/how-do-i-convert-array-of-objects-into-one-object-in-javascript
  return scheduling.reduce((obj, item) => Object.assign(obj, item), {});
};

const getScheduleBySpecies = (target) => species.find((spec) => spec.name === target).availability;

const isMatch = (target) => species.some((spec) => spec.name === target);

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (!scheduleTarget || !isMatch(scheduleTarget)) {
    const getScheduling = getGeneralSchedule();
    return getScheduling;
  }

  const getAnimalSchedule = getScheduleBySpecies(scheduleTarget);
  return getAnimalSchedule;
};

console.log(getSchedule('Monday'));
module.exports = getSchedule;
