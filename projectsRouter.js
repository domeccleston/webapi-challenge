const express = require('express');
const db = require('./data/helpers/projectModel');
const router = express.Router();

// error handling middleware

function isValidParamId(req, res, next) {
  console.log(req.params.id);
  // eslint-disable-next-line radix
  if (parseInt(req.params.id) > 0) {
    next();
  } else {
    res.status(404).json('ID must be a valid number');
  }
}

// routes for /api/projects/

router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', isValidParamId, (req, res) => {
  db.get(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json('Invalid project ID');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', isValidParamId, (req, res) => {
  db.update(req.params.id, req.body)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json('Invalid project ID');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
