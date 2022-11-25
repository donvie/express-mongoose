const TodoController = require("../controllers/todo.js");
const todoController = new TodoController();

var express = require('express');
var router = express.Router();

const Todo = require("../databases/model/todo.model.js");


const { myLogger } = require("../middleware/myLogger.js");

router.get('/', myLogger, todoController.addTodo);

module.exports = router;
