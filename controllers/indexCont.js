const db = require('../database/models');

const indexCont = {
  index: function (req, res) {
    db.Producto.findAll({
      include: {
        model: db.Usuario,
        as: 'usuario',
        attributes: [
            'id', 
            'email'
        ]
      }
    })
    .then(productos => {
      res.render('index', { productos });
    })
    .catch(error => {
      console.error(error);
    });
  },

  search: function (req, res) {
    res.render('search-results');
  }
};

module.exports = indexCont;