const TodoController = require("../controllers/todo.js");
const todoController = new TodoController();

var express = require('express');
var router = express.Router();

const { myLogger } = require("../middleware/myLogger.js");

router.get('/', myLogger, todoController.addTodo);
router.get('/list', todoController.getTodos);

module.exports = router;
