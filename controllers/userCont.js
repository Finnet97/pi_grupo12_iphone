const data = require('../db/modulo_datos');

const userCont = {
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
        res.render('profile', { usuario: data.usuario });
    }
}

module.exports = userCont;