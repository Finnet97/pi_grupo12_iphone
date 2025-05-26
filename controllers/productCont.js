const db = require('../database/models');

const productCont = {
    index: function(req, res) {
        res.render('index');
    },
    productDetail: async function (req, res) {
        try {
          const product = await db.Producto.findByPk(req.params.id, {
            include: [
              {
                model: db.Usuario,
                as: 'usuario',
                attributes: ['email']
              },
              {
                model: db.Comentario,
                as: 'comentarios'
              }
            ]
          });
    
          if (!product) return res.status(404).send('Producto no encontrado');
    
          res.render('product', { product });
        } catch (error) {
          console.error('Error al cargar producto:', error);
          res.status(500).send('Error interno del servidor');
        }
    },
    productAdd: function(req, res) {
        res.render('product-add');
    }
}

module.exports = productCont;