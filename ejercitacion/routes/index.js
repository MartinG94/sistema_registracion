var express = require('express');
var router = express.Router();
const mainController = require('../controller/mainController');

/* GET home page. */
router.get('/', mainController.home);
router.get('/register', mainController.register);

module.exports = router;
