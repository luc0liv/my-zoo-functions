const data = require('../data/zoo_data');

const { employees, species } = data;

const createNewObject = (id, firstName, lastName, spec, locations) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: spec,
  locations,
});

const findMatch = (person) => {
  const hasMatch = employees.some((emp) => emp.id === person.id
  || emp.firstName === person.name
  || emp.lastName === person.name);
  return hasMatch;
};

const getEveryEmployee = () => {
  const everyEmployee = employees.map((emp) => {
    const getSpecies = species.filter((sp) => emp.responsibleFor.some((el) => sp.id === el));
    const employeesInfo = createNewObject(emp.id, emp.firstName, emp.lastName,
      getSpecies.map((sp) => sp.name),
      getSpecies.map((sp) => sp.location));
    return employeesInfo;
  });

  return everyEmployee;
};

const getSpecificEmployee = (person) => {
  const employee = employees
    .find((emp) => emp.firstName === person.name
  || emp.lastName === person.name
  || emp.id === person.id);

  return employee;
};

const getEmployeesCoverage = (person) => {
  if (!person) {
    return getEveryEmployee();
  }
  if (!findMatch(person)) {
    throw new Error('Informações inválidas');
  }
  if (person.name || person.id) {
    const specifiedEmployee = getSpecificEmployee(person);
    const { id, firstName, lastName, responsibleFor } = specifiedEmployee;
    const getSpecies = species.filter((spec) => responsibleFor.some((el) => spec.id === el));

    const employeeInfo = createNewObject(id, firstName, lastName,
      getSpecies.map((sp) => sp.name),
      getSpecies.map((sp) => sp.location));

    return employeeInfo;
  }
};

module.exports = getEmployeesCoverage;
