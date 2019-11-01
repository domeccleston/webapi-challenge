const express = require('express');
const actionsDb = require('./data/helpers/actionModel');
const isValidParamId = require('./middleware/middleware');

const router = express.Router();

router.get('/', (req, res) => {
  actionsDb
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', isValidParamId, (req, res) => {
  actionsDb
    .get(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json('Invalid action ID');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', isValidParamId, (req, res) => {
  actionsDb
    .update(req.params.id, req.body)
    .then(action => {
      if (action) {
        res.status(200).json({ message: 'PUT request succcessful', action });
      } else {
        res.status(404).json('Invalid action ID');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/:id', isValidParamId, (req, res) => {
  actionsDb
    .remove(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json('action deleted succesfully.');
      } else {
        res.status(404).json('Invalid action ID');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  actionsDb
    .insert(req.body)
    .then(action => {
      res.status(200).json({ message: 'New action created successfully', action });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
