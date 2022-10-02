const data = require('../data/zoo_data');

const { employees, species } = data;

const findMatch = (person) => {
  const hasMatch = employees.some((emp) => emp.id === person.id
  || emp.firstName === person.name
  || emp.lastName === person.name);
  return hasMatch;
};

const getEveryEmployee = () => {
  const everyEmployee = employees.map((emp) => {
    const getSpecies = species.filter((sp) => emp.responsibleFor.some((el) => sp.id === el));
    return {
      id: emp.id,
      fullName: `${emp.firstName} ${emp.lastName}`,
      species: getSpecies.map((sp) => sp.name),
      locations: getSpecies.map((sp) => sp.location),
    };
  });

  return everyEmployee;
};

const getEmployeesCoverage = (person) => {
  if (!person) {
    return getEveryEmployee();
  }
  if (!findMatch(person)) {
    throw new Error('Informações inválidas');
  }
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

// console.log(getEmployeesCoverage('Luciana'));

module.exports = getEmployeesCoverage;
