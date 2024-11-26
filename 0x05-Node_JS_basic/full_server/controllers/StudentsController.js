import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    // Validate the database file path
    const filePath = process.argv[2];
    if (!filePath) {
      res.status(500).send('Database file path is not provided');
      return;
    }

    readDatabase(filePath)
      .then((students) => {
        // Construct response text
        let responseText = 'This is the list of our students\n';
        const fields = Object.keys(students).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        fields.forEach((field) => {
          const list = students[field].join(', ');
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
        });

        // Send successful response
        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        // Handle database read errors
        console.error('Error reading database:', err);
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    // Validate major
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Validate the database file path
    if (!filePath) {
      res.status(500).send('Database file path is not provided');
      return;
    }

    readDatabase(filePath)
      .then((students) => {
        // Retrieve students by major
        const list = students[major] ? students[major].join(', ') : '';
        res.status(200).send(`List: ${list}`);
      })
      .catch((err) => {
        // Handle database read errors
        console.error('Error reading database:', err);
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
