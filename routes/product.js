var express = require('express');
var router = express.Router();

const productCont = require('../controllers/productCont');

/* GET home page. */
router.get('/', productCont.index);
router.get('/:id', productCont.index);

router.get('/add', productCont.productAdd);

module.exports = router;