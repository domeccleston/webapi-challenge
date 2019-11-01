const express = require('express');
const actionsDb = require('./data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  actionsDb
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;