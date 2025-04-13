var express = require('express');
var router = express.Router();

const registerCont = require('../controllers/registerCont');

/* GET home page. */
router.get('/', registerCont.index);

module.exports = router;
