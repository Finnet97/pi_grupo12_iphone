const productCont = {
    index: function(req, res) {
        res.render('product');
    },
    productAdd: function(req, res) {
        res.render('product-add');
    }
}

module.exports = productCont;