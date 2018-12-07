const client = require('../db-client');
const students = require('./students.json');
const tracks = require('./tracks');

Promise.all(
  tracks.map(track => {
    return client.query(`
            INSERT INTO track (name, yob)
            VALUES ($1, $2);
        `,
    [track.name, track.yob]);
  })
)
  .then(() => {
    return Promise.all(
      students.map(student => {
        return client.query(`
              INSERT INTO student (name, yob)
              SELECT
                $1 as name,
                $2 as yob
            `,
        [student.name, student.yob]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });