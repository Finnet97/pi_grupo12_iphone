const db = require('../database/models');
const { Op } = require('sequelize');

const indexCont = {
  index: function(req, res) {
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
  search: function(req, res) {
    const busqueda = req.query.search;

    db.Producto.findAll({
      where: {
        nombre: {
          [Op.like]: `%${busqueda}%`
        }
      },
      include: [{ association: "usuario" }]
    })
    .then(productos => {
      res.render('search-results', {
        productos: productos,
        busqueda: busqueda,
        user: req.session.user || null
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
};

module.exports = indexCont;