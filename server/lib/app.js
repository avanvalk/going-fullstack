const express = require('express');
const app = express();
const morgan = require('morgan');
const students = require('./routes/students');
const tracks = require('./routes/tracks');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

// register our routes
app.use('/api/tracks', tracks);
app.use('/api/students', students);

module.exports = app;