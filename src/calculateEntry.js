const data = require('../data/zoo_data');

// const entrantsArray = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => {
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const child = entrants.filter((entrant) => entrant.age >= 0 && entrant.age < 18);

  const entries = { child: child.length, adult: adult.length, senior: senior.length };

  return entries;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const entrantsPerAge = countEntrants(entrants);
  const { child, adult, senior } = data.prices;
  const total = (entrantsPerAge.child * child)
  + (entrantsPerAge.adult * adult)
  + (entrantsPerAge.senior * senior);

  return total;
};

module.exports = { calculateEntry, countEntrants };
