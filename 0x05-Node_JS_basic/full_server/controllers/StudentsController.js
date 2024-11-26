import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        fields.forEach((field) => {
          const list = students[field].join(', ');
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((students) => {
        const list = students[major]?.join(', ') || '';
        res.status(200).send(`List: ${list}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
