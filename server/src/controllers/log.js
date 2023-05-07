const { LogTypeEnum, Log } = require('../models/Log');
const { existedHandling } = require('../helpers/messageHandling');

const logController = {
  async registerLog(req, res) {
    const { type, title, description } = req.body;

    try {
      const log = new Log({ type, title, description });
      const logSaved = await log.save();

      return res.status(201).json(logSaved);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getAllLogs(req, res) {
    try {
      const logs = await Log.find({});

      return res.status(200).json(logs);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async toggleVisibleLog(req, res) {
    const { id: _id } = req.params;
    
    try {
      await Log.findByIdAndUpdate(_id, { visible: true });
      const logs = await Log.find({});

      return res.status(200).json(logs);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async deleteAllLogs(req, res) {
    try {
      await Log.deleteMany({});

      res.status(204).json({ message: true });
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
}
module.exports = logController;