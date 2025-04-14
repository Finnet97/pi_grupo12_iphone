var express = require('express');
var router = express.Router();

const userCont = require('../controllers/userCont');

router.get('/login', userCont.login);
router.get('/register', userCont.register);
router.get('/profile', userCont.profile);

module.exports = router;