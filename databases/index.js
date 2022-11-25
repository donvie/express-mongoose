const mongoose = require("mongoose");

function connectDB(url) {
	console.warn("Connecting to DB");
	mongoose.connect(url, { useNewUrlParser: true });
	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", () => {
		console.warn("Successfully connected to DB!");
	});
}

module.exports = {
	connectDB: connectDB
};