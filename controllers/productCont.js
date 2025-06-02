const db = require('../database/models');

const productCont = {
  index: function(req, res) {
    res.render('index');
  },

  productDetail: function(req, res) {
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
    .then(function(product) {
      res.render('product', { product });
    })
    .catch(function(error) {
      console.error(error);
    });
  },
  productAdd: function(req, res) {
    res.render('product-add');
  },
  productComment: function(req, res) {
    console.log("🟢 Entró a productComment");

    let prodId = req.params.id;
  
    let commentInfo = {
      productoId: prodId,
      usuarioId: req.session.user.id,
      texto: req.body.comentario
    };
  
    db.Comentario.create(commentInfo)
      .then(function() {
        res.redirect(`/product/${prodId}`);
      })
      .catch(function(error) {
        console.error(error);
      });
  }  
};

module.exports = productCont;