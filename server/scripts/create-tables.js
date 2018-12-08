const client = require('../db-client');

//change the client query information

client.query(`
    CREATE TABLE IF NOT EXISTS track (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        short_name VARCHAR(8) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS student (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        school VARCHAR(256) NOT NULL,
        yob VARCHAR(256) NOT NULL,
        track_id INTEGER NOT NULL REFERENCES track(id)
    );

`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });