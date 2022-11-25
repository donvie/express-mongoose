const mongoose = require("mongoose");
const Todo = require("../databases/model/todo.model.js");

class TodoService {
	async createTodo(data) {

        try {
            const post = new Todo({
                text: 'wewew'
            })
            const newTodo = await post.save()
            return newTodo
        } catch (error) {
            throw new Error(error);
        }
	}

    async getAll(data) {

        try {
            return await Todo.find({});
        } catch (error) {
            throw new Error(error);
        }
	}
}

module.exports = new TodoService();