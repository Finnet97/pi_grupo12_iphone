const db = require('../database/models');

const indexCont = {
  index: async function (req, res) {
    try {
      const productos = await db.Producto.findAll({
        include: {
          model: db.Usuario,
          as: 'usuario',
          attributes: ['id', 'email']
        }
      });

      res.render('index', { productos });
    } catch (error) {
      console.error('Error al cargar productos:', error);
      res.status(500).send('Error interno del servidor');
    }
  },
  search: function (req, res) {
    res.render('search-results');
  }
};

module.exports = indexCont;