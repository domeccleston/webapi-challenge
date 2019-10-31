const express = require('express');
const projectsRouter = require('./projectsRouter');
const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send('webapi-challenge');
});

module.exports = server;
