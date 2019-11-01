const express = require('express');
const cors = require('cors');
const projectsRouter = require('./projectsRouter');
const actionsRouter = require('./actionsRouter');

const server = express();
server.use(express.json());
server.use(cors());
server.use(express.static(__dirname + '/client/build'))

server.get('/', (req, res) => {
  res.sendFile(express.static(__dirname + '/client/build/index.html'));
});

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
