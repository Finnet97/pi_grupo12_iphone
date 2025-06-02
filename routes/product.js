var express = require('express');
var router = express.Router();

const productCont = require('../controllers/productCont');

router.get('/product', productCont.index);

router.get('/add', productCont.productAddVista);
router.post('/add', productCont.productAddPost);

router.post('/:id/comment', productCont.productComment);
router.get('/:id', productCont.productDetail);


module.exports = router;