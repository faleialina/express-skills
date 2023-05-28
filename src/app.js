const express = require('express');
const bodyParser = require('body-parser');
const skill = require('./controller/skill.controller.js');

const app = express();

app.use(bodyParser.json());

app.use('/skill', skill);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
