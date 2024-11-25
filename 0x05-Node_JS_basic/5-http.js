const http = require('http');
const fs = require('fs');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        resolve('No students found in the database');
        return;
      }

      const students = {};
      let totalStudents = 0;

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          totalStudents += 1;
          const field = fields[3].trim();
          const name = fields[0].trim();
          if (!students[field]) students[field] = [];
          students[field].push(name);
        }
      });

      let output = `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(database)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
