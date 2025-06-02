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
  productAddVista: function(req, res) {
    if (req.session.user != undefined) {
      return res.render('/product/add')
    } else {
      return res.redirect('/user/login')
    }
  },
  productAddPost: function(req, res) {
    console.log("POST recibido:");
    console.log(req.body);    

    let productInfo = {
      usuarioId: req.session.user.id,
      imagen: req.body.imagen,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    }

    db.Producto.create(productInfo)
      .then(function() {
        res.redirect(`/user/profile/${req.session.user.id}`);
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  productComment: function(req, res) {
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