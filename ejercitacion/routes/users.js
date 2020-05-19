var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/usersAvatars');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

/* GET users listing. */
router.get('/', userController.root)
router.get('/register', userController.formRegister);
router.post('/register', upload.single('avatar'), userController.register);
router.get('/profile', userController.profile);

module.exports = router;
