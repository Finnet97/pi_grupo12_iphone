const dato = require('../db/modulo_datos');

const profileCont = {
    index: function(req, res) {
        res.render('profile', { usuario: dato.usuario });
    }
}

module.exports = profileCont;