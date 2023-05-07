const Joi = require('joi');

const { requiredHandling } = require('../helpers/messageHandling');

const logValidation = {
  async registerLog(req, res, next) {
    const { type, title, description } = req.body;

    const registerLogSchema = Joi.object({
      type: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
    });

    try {
      await registerLogSchema.validateAsync({ type, title, description });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  },
  async toggleVisibleLog(req, res, next) {
    const { id } = req.params;

    const toggleVisibleLogSchema = Joi.object({
      id: Joi.string().alphanum().length(24).required(),
    });

    try {
      await toggleVisibleLogSchema.validateAsync({ id });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  },
}
module.exports = logValidation;