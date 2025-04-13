var express = require('express');
var router = express.Router();

const profileCont = require('../controllers/profileCont');

/* GET home page. */
router.get('/', profileCont.index);

module.exports = router;