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
  },
  async getTemperaturesZoneDate(req, res, next) {
    const { date } = req.query;

    const getTemperaturesZoneDateSchema = Joi.object({
      date: Joi.string().optional(),
    });

    try {
      await getTemperaturesZoneDateSchema.validateAsync({ date });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getPressuresZoneDate(req, res, next) {
    const { date } = req.query;

    const getPressuresZoneDateSchema = Joi.object({
      date: Joi.string().optional(),
    });

    try {
      await getPressuresZoneDateSchema.validateAsync({ date });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getPowersZoneDate(req, res, next) {
    const { date } = req.query;

    const getPowersZoneDateSchema = Joi.object({
      date: Joi.string().optional(),
    });

    try {
      await getPowersZoneDateSchema.validateAsync({ date });
      next();
    } catch (err) {
      const error = requiredHandling(err);;
      res.status(error.httpStatusCode).json(error);
    }
  },
}
module.exports = zoneValidation;