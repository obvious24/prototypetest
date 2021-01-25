var express = require('express');
var router = express.Router();

/* post home page. */
router.post('/test', function (req, res, next) {
  console.log(req.body);
  const parseMessage = JSON.parse(req.body);
  const message = parseMessage.name;
  res.status(200).json({ message: message });
});

module.exports = router;
