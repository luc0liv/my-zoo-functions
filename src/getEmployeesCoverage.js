const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployeesCoverage = (person) => {
  if (person.name || person.id) {
    const employee = employees
      .find((emp) => emp.firstName === person.name
      || emp.lastName === person.name
      || emp.id === person.id);
    const { id, firstName, lastName, responsibleFor } = employee;
    const getSpecies = species.filter((spec) => responsibleFor.some((el) => spec.id === el));
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies.map((sp) => sp.name),
      locations: getSpecies.map((sp) => sp.location),
    };
  }
};

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
