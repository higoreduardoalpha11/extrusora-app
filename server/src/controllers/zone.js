const dayjs = require('dayjs');

const Zone = require('../models/Zone');

const zoneController = {
  async registerZone(req, res) {
    const { zoneType, temperature, pressure, power } = req.body;

    try {
      const zone = new Zone({ zoneType, temperature, pressure, power });
      const zoneSaved = await zone.save();

      return res.status(201).json(zoneSaved);
    } catch (err) {
      console.log(err);
    }
  },
  async getZoneDate(req, res) {
    const { date } = req.query;

    const parsedDate = dayjs(date).startOf('day');

    // const parsedDate = dayjs(date).startOf('day');
    // const year = parsedDate.get('year');
    // const day = parsedDate.get('date');
    // const month = parsedDate.get('month');

    console.log(parsedDate);
    parsedDate.add(1, 'day');
    console.log(parsedDate);

    return res.status(200).json({ msg: 'Ok' });

    // try {
    //   const allZones = await Zone.find({
    //     createdAt: {
    //       $gte: currentDate,
    //       $lt: nextDate,
    //     }
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  },
}
module.exports = zoneController;