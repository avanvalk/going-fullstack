const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS student;
  DROP TABLE IF EXISTS track;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });