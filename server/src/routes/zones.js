const router = require('express').Router();
const zoneValidation = require('../middlewares/zoneValidation');
const zoneController = require('../controllers/zone');

router.post('/', zoneValidation.registerZone, zoneController.registerZone);
router.get('/', zoneValidation.getZoneDate, zoneController.getZoneDate);

module.exports = router;