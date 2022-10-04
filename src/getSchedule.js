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

const speciesMatch = (target) => species.some((spec) => spec.name === target);
const dayMatch = (target) => Object.keys(hours).some((day) => day === target);

const getSchedule = (scheduleTarget) => {
  const generalScheduling = getGeneralSchedule();

  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (dayMatch(scheduleTarget)) {
    const scheduleByDay = Object.keys(generalScheduling).filter((key) => key === scheduleTarget);
    return { [scheduleByDay]: generalScheduling[scheduleByDay] };
  }
  if (!scheduleTarget || !speciesMatch(scheduleTarget)) {
    return generalScheduling;
  }
  const scheduleBySpecies = getScheduleBySpecies(scheduleTarget);
  return scheduleBySpecies;
};

module.exports = getSchedule;
