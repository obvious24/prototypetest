var express = require('express');
var router = express.Router();

/* post home page. */
router.post('https://localhost:5000/test', function (req, res, next) {
  const parseMessage = JSON.parse(req.body);
  const message = parseMessage.name;
  res.status(200).json({ message: message });
});

module.exports = router;
