var express = require('express');
var router = express.Router();

const searchCont = require('../controllers/searchCont');

/* GET home page. */
router.get('/', searchCont.index);

module.exports = router;