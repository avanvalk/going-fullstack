const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/students.json', 'utf8');
  return JSON.parse(data);
}

function saveData(students) {
  const json = JSON.stringify(students, true, 2);
  fs.writeFileSync('./data/students.json', json);
}

app.use(express.json());

app.get('/api/data/students', (req, res) => {
  const students = readData();

  if(req.query.name) {
    const match = req.query.name.toLowerCase();
    const filtered = students.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(students);
  }
});

app.post('/api/data/students', (req, res) => {

  const students = readData();
  const student = req.body;
  student.id = shortid.generate();
  students.push(student);
  saveData(students);

  res.json(student);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */