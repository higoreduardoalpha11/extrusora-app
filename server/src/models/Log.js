const mongoose = require('mongoose');

const LogTypeEnum = {
  Error: 'error',
  Success: 'success',
  Warning: 'warning',
}

const LogSchema = mongoose.Schema({
  type: { type: String, enum: LogTypeEnum, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  visible: { type: Boolean, default: false },
}, { timestamps: true });

const Log = mongoose.model('Log', LogSchema);
module.exports = { LogTypeEnum, Log };