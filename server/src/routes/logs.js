const router = require('express').Router();
const logValidation = require('../middlewares/logValidation');
const logController = require('../controllers/log');

router.post('/', logValidation.registerLog, logController.registerLog);
router.get('/', logController.getAllLogs);
router.patch('/visible/:id', logValidation.toggleVisibleLog, logController.toggleVisibleLog);
router.delete('/', logController.deleteAllLogs);

module.exports = router;