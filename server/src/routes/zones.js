const router = require('express').Router();
const zoneValidation = require('../middlewares/zoneValidation');
const zoneController = require('../controllers/zone');

router.post('/', zoneValidation.registerZone, zoneController.registerZone);
router.get('/', zoneValidation.getZoneDate, zoneController.getZoneDate);
router.get('/temperatures', zoneValidation.getTemperaturesZoneDate, zoneController.getTemperaturesZoneDate);
router.get('/pressures', zoneValidation.getPressuresZoneDate, zoneController.getPressuresZoneDate);
router.get('/powers', zoneValidation.getPowersZoneDate, zoneController.getPowersZoneDate);

module.exports = router;