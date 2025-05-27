var express = require('express');
var router = express.Router();

const userCont = require('../controllers/userCont');

router.get('/login', userCont.loginVista);
router.post('/login', userCont.loginProcesar);

router.get('/register', userCont.registerVista);
router.post('/register', userCont.registerGuardar);

router.get('/profile/:id', userCont.profile);

module.exports = router;