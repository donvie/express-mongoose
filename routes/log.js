const LogController = require("../controllers/log.js");
const logController = new LogController();

var express = require('express');
var router = express.Router();

// const myLogger = require("../databases/model/log.model.js");


const { myLogger } = require("../middleware/myLogger.js");

router.get('/', myLogger, logController.addLog);

module.exports = router;
