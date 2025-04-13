var express = require('express');
var router = express.Router();

const indexCont = require('../controllers/indexCont');

/* GET home page. */
router.get('/', indexCont.index);

module.exports = router;
