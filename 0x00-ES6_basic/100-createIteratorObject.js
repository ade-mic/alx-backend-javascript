export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employees = [];

  for (const department of Object.values(allEmployees)) {
    employees = employees.concat(department);
  }

  return employees[Symbol.iterator]();
}