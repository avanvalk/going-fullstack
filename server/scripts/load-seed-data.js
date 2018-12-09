const client = require('../db-client');
const students = require('./students.json');
const tracks = require('./tracks-data');

Promise.all(
  tracks.map(track => {
    return client.query(`
            INSERT INTO track (name, short_name)
            VALUES ($1, $2);
        `,
    [track.name, track.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      students.map(student => {
        return client.query(`
              INSERT INTO student (yob, track_id, name, school)
              SELECT
                $1 as yob,
                id as track_id,
                $2 as name,
                $3 as school
              FROM track
              WHERE short_name = $4;
            `,
        [student.yob, student.name, student.school, student.track]);
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