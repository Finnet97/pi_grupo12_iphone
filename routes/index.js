var express = require('express');
var router = express.Router();

const indexCont = require('../controllers/indexCont');

router.get('/', indexCont.index);
router.get('/search-results', indexCont.search);

module.exports = router;
