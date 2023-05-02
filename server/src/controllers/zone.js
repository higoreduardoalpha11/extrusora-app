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
}
module.exports = zoneController;