var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.root)
router.get('/register', userController.register);

module.exports = router;
