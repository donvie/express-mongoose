const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true
		},
		logs: [{ type: Schema.Types.ObjectId, ref: 'logs' }]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("todos", todoSchema);