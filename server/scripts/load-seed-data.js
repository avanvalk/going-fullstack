const client = require('../db-client');
const students = require('./students.json');
const tracks = require('./tracks');

Promise.all(
  tracks.map(track => {
    return client.query(`
            INSERT INTO track (name)
            VALUES ($1);
        `,
    [track.name]);
  })
)
  .then(() => {
    return Promise.all(
      students.map(student => {
        return client.query(`
              INSERT INTO student (name, yob, school)
              SELECT
                $1 as yob,
                id as name,
                $2 as school
              FROM track
              WHERE name = $3;
            `,
        [student.yob, student.school, student.track]);
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