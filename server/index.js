require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const zoneRoutes = require('./src/routes/zones');

const app = express();
const mongoUrl = process.env.SERVER_MONGO_URL;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.use('/zones', zoneRoutes);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(4040, (err) => {
    if (err) console.log('Did not connected');
    console.log('Server running on port: 4040');
  })
}).catch(() => {
  console.log('Did not connected');
})