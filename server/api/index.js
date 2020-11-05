// further delegate each route into its own namespace

const router = require('express').Router();

router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/

// What if a user requests an API route that doesn't exist? Give 'em the 'ol 404!
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
