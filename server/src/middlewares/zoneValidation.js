const Joi = require('joi');

const { requiredHandling } = require('../helpers/messageHandling');

const zoneValidation = {
  async registerZone(req, res, next) {
    const { zoneType, temperature, pressure, power } = req.body;

    const registerZoneSchema = Joi.object({
      zoneType: Joi.string().required(),
      temperature: Joi.number().required(),
      pressure: Joi.number().required(),
      power: Joi.number().required(),
    });

    try {
      await registerZoneSchema.validateAsync({ zoneType, temperature, pressure, power });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getZoneDate(req, res, next) {
    const { date } = req.query;

    const getZoneDateSchema = Joi.object({
      date: Joi.string().optional(),
    });

    try {
      await getZoneDateSchema.validateAsync({ date });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  }
}
module.exports = zoneValidation;