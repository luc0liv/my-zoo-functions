const data = require('../data/zoo_data');

const { species, hours } = data;

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return {
      Tuesday: { // Dia da semana
        officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm.`, // n
        exhibition: species.filter((spec) => spec.availability.includes('Tuesday')).map((spec) => spec.name),
      },
      Wednesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
      },
    };
  }
  const getAnimalSchedule = species
    .find((spec) => spec.name === scheduleTarget).availability;
  return getAnimalSchedule;
};

console.log(getSchedule());

module.exports = getSchedule;
