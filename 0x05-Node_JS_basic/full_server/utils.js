import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  // Read the file asynchronously
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      // Reject the promise if the file cannot be read
      reject(err);
      return;
    }

    // Parse the file contents
    const studentsByField = {};
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    // Check if headers are as expected
    const expectedHeaders = ['firstname', 'lastname', 'age', 'field'];
    if (!headers.every((header, index) => header.trim() === expectedHeaders[index])) {
      reject(new Error('Invalid database format'));
      return;
    }

    // Process each line (skipping the header line)
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    // Resolve the promise with the resulting object
    resolve(studentsByField);
  });
});

export default readDatabase;
