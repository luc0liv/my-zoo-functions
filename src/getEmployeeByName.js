const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employeeObj = data.employees
    .find((employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName);

  return employeeObj;
};

module.exports = getEmployeeByName;
