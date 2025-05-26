const db = require('../database/models');

const productCont = {
    index: function(req, res) {
        res.render('index');
    },
    productDetail: function (req, res) {
        db.Producto.findByPk(req.params.id, {
            include: [
              {
                association: 'usuario',
                attributes: ['id', 'email']
              },
              {
                association: 'comentarios',
                include: [{
                  association: 'autor',
                  attributes: ['id', 'email']
                }]
              }
            ]
        })          
        .then(product => {
          if (!product) return res.status(404).send('Producto no encontrado');
          res.render('product', { product });
        })
        .catch(error => {
          console.error(error);
        });
    },
    productAdd: function(req, res) {
        res.render('product-add');
    }
}

module.exports = productCont;