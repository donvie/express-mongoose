const mongoose = require("mongoose");
const Log = require("../databases/model/log.model.js");

class LogService {
	async createLog(data) {

        try {
            const post = new Log({
                text: 'wewew'
            })
            const newLog = await post.save()
            return newLog
        } catch (error) {
            throw new Error(error);
        }
	}
}

module.exports = new LogService();