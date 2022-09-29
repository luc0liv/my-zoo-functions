const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managersIds = [stephanieId, olaId, burlId];

const isManager = (id) => managersIds.some((manager) => manager === id);

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managerEmployees = data.employees.filter((emp) => emp.managers.includes(managerId));
    const newArray = managerEmployees.map((empl) => `${empl.firstName} ${empl.lastName}`);

    return newArray;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
