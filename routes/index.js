var express = require('express');
var router = express.Router();

const { myLogger } = require("../middleware/myLogger.js");

/* GET home page. */
router.get('/', myLogger, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
