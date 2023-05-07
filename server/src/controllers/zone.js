const dayjs = require('dayjs');

const { ZoneTypeEnum, Zone } = require('../models/Zone');
const { existedHandling } = require('../helpers/messageHandling');

const zoneController = {
  async registerZone(req, res) {
    const { zoneType, temperature, pressure, power } = req.body;

    try {
      const zone = new Zone({ zoneType, temperature, pressure, power });
      const zoneSaved = await zone.save();

      return res.status(201).json(zoneSaved);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getZoneDate(req, res) {
    const { date } = req.query;

    const currentDate = date ? new Date(date) : new Date();
    const parsedDate = dayjs(currentDate).add(1, 'day');
    const nextDate = new Date(parsedDate);

    try {
      const entryZone = await Zone.find({
        createdAt: {
          $gte: currentDate,
          $lt: nextDate,
        },
        zoneType: ZoneTypeEnum.Entry,
      });

      const mixZone = await Zone.find({
        createdAt: {
          $gte: currentDate,
          $lt: nextDate,
        },
        zoneType: ZoneTypeEnum.Mix,
      });

      const dosageZone = await Zone.find({
        createdAt: {
          $gte: currentDate,
          $lt: nextDate,
        },
        zoneType: ZoneTypeEnum.Dosage,
      });

      return res.status(200).json(
        Object.assign({}, { entryZone, mixZone, dosageZone })
      );
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getTemperaturesZoneDate(req, res) {
    const { date } = req.query;

    const currentDate = date ? new Date(date) : new Date();
    const parsedDate = dayjs(currentDate).add(1, 'day');
    const nextDate = new Date(parsedDate);

    try {
      const temperatures = await Zone
        .find({
          createdAt: {
            $gte: currentDate,
            $lt: nextDate,
          },
        })
        .select('createdAt temperature zoneType')
        .sort({ createdAt: 1 });

      const entry = temperatures
        .map((item) => item.zoneType === ZoneTypeEnum.Entry ? item : undefined)
        .filter((item) => item !== undefined);
      const mix = temperatures
        .map((item) => item.zoneType === ZoneTypeEnum.Mix ? item : undefined)
        .filter((item) => item !== undefined);
      const dosage = temperatures
        .map((item) => item.zoneType === ZoneTypeEnum.Dosage ? item : undefined)
        .filter((item) => item !== undefined);

      const template = {
        name: '',
        Alimentacao: '',
        Mistura: '',
        Dosagem: '',
      };
      const formatedTemperatures = [];
      entry.forEach((item, i) => {
        const dataObj = { ...template };
        dataObj.name = dayjs(item.createdAt).format('HH:mm');
        dataObj.Alimentacao = entry[i]?.temperature;
        dataObj.Mistura = mix[i]?.temperature;
        dataObj.Dosagem = dosage[i]?.temperature;
        formatedTemperatures.push(dataObj);
      });

      return res.status(200).json(formatedTemperatures);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getPressuresZoneDate(req, res) {
    const { date } = req.query;

    const currentDate = date ? new Date(date) : new Date();
    const parsedDate = dayjs(currentDate).add(1, 'day');
    const nextDate = new Date(parsedDate);

    try {
      const pressures = await Zone
        .find({
          createdAt: {
            $gte: currentDate,
            $lt: nextDate,
          },
        })
        .select('createdAt pressure zoneType')
        .sort({ createdAt: 1 });

      const entry = pressures
        .map((item) => item.zoneType === ZoneTypeEnum.Entry ? item : undefined)
        .filter((item) => item !== undefined);
      const mix = pressures
        .map((item) => item.zoneType === ZoneTypeEnum.Mix ? item : undefined)
        .filter((item) => item !== undefined);
      const dosage = pressures
        .map((item) => item.zoneType === ZoneTypeEnum.Dosage ? item : undefined)
        .filter((item) => item !== undefined);

      const template = {
        name: '',
        Alimentacao: '',
        Mistura: '',
        Dosagem: '',
      };
      const formatedPressures = [];
      entry.forEach((item, i) => {
        const dataObj = { ...template };
        dataObj.name = dayjs(item.createdAt).format('HH:mm');
        dataObj.Alimentacao = entry[i]?.pressure;
        dataObj.Mistura = mix[i]?.pressure;
        dataObj.Dosagem = dosage[i]?.pressure;
        formatedPressures.push(dataObj);
      });

      return res.status(200).json(formatedPressures);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
  async getPowersZoneDate(req, res) {
    const { date } = req.query;

    const currentDate = date ? new Date(date) : new Date();
    const parsedDate = dayjs(currentDate).add(1, 'day');
    const nextDate = new Date(parsedDate);

    try {
      const powers = await Zone
        .find({
          createdAt: {
            $gte: currentDate,
            $lt: nextDate,
          },
        })
        .select('createdAt power zoneType')
        .sort({ createdAt: 1 });

      const entry = powers
        .map((item) => item.zoneType === ZoneTypeEnum.Entry ? item : undefined)
        .filter((item) => item !== undefined);
      const mix = powers
        .map((item) => item.zoneType === ZoneTypeEnum.Mix ? item : undefined)
        .filter((item) => item !== undefined);
      const dosage = powers
        .map((item) => item.zoneType === ZoneTypeEnum.Dosage ? item : undefined)
        .filter((item) => item !== undefined);

      const template = {
        name: '',
        Alimentacao: '',
        Mistura: '',
        Dosagem: '',
      };
      const formatedPowers = [];
      entry.forEach((item, i) => {
        const dataObj = { ...template };
        dataObj.name = dayjs(item.createdAt).format('HH:mm');
        dataObj.Alimentacao = entry[i]?.power;
        dataObj.Mistura = mix[i]?.power;
        dataObj.Dosagem = dosage[i]?.power;
        formatedPowers.push(dataObj);
      });

      return res.status(200).json(formatedPowers);
    } catch (err) {
      const error = existedHandling();
      res.status(error.httpStatusCode).json(error);
    }
  },
}
module.exports = zoneController;