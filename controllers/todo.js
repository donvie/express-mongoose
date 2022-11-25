const todoService = require("../services/todo");

class TodoController {
	async addTodo(req, res) {
		const data = req.body;

		try {
			const todo = await todoService.createTodo();

			return res.status(200).json({
				data: todo
			});
		} catch (error) {
			console.error("Something went wrong with creating the user:");
			console.error(error);
		}
	}
	
	async getTodos (req, res) {
		const data = req.body;

		try {
			const todo = await todoService.getAll();

			return res.status(200).json({
				data: todo
			});
		} catch (error) {
			console.error("Something went wrong with creating the user:");
			console.error(error);
		}
	}
}

module.exports = TodoController;