interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Ade',
  lastName: 'Mic',
  age: 25,
  location: 'Ng'
};

const secondStudent: Student = {
  firstName: 'Kem',
  lastName: 'Pec',
  age: 22,
  location: 'UK'
};

const studentList = [firstStudent, secondStudent];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = document.createElement('tr')

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell)

  tbody.appendChild(row);
})

table.appendChild(tbody);
document.body.appendChild(table);