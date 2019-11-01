// error handling middleware

function isValidParamId(req, res, next) {
  // eslint-disable-next-line radix
  if (parseInt(req.params.id) > 0) {
    next();
  } else {
    res.status(404).json('ID must be a valid number');
  }
}

module.exports = isValidParamId;