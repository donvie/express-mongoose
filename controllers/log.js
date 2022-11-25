const logService = require("../services/log");

class LogController {
	async addLog(req, res) {
		const data = req.body;

		try {
			const log = await logService.createLog();

			return res.status(200).json({
				data: log
			});
		} catch (error) {
			console.error("Something went wrong with creating the user:");
			console.error(error);
		}
	}
}

module.exports = LogController;