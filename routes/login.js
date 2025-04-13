var express = require('express');
var router = express.Router();

const loginCont = require('../controllers/loginCont');

/* GET home page. */
router.get('/', loginCont.index);

module.exports = router;