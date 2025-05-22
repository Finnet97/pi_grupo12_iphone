const data = require('../db/modulo_datos');

const productCont = {
    index: function(req, res) {
        res.render('index', { productos: data.productos });
    },
    productDetail: function(req, res) {
        const id = parseInt(req.params.id);
        const product = data.productos.find(p => p.id === id);

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        res.render('product', { product });
    },
    productAdd: function(req, res) {
        res.render('product-add');
    }
}

module.exports = productCont;