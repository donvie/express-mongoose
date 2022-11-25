const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("logs", logSchema);