const mongoose = require('mongoose');

const ZoneTypeEnum = {
  Entry: 'entry',
  Mix: 'mix',
  Dosage: 'dosage',
}

const ZoneSchema = mongoose.Schema({
  zoneType: { type: String, enum: ZoneTypeEnum, required: true },
  temperature: { type: Number, required: true },
  pressure: { type: Number, required: true },
  power: { type: Number, required: true },
}, { timestamps: true });

const Zone = mongoose.model('Zone', ZoneSchema);
module.exports = Zone;