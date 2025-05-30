var express = require('express');
var router = express.Router();

const productCont = require('../controllers/productCont');

/* GET home page. */
router.get('/', productCont.index);
router.get('/add', productCont.productAdd);
router.get('/:id', productCont.productDetail);

module.exports = router;