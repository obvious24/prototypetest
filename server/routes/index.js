var express = require('express');
var router = express.Router();

/* post home page. */
router.post('/test',  (req, res, next) => {
  console.log(req.body);
  const message = req.body.name;
  res.status(200).json({ message: message });
});

module.exports = router;
