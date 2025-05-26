const db = require('../database/models');

const userCont = {
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function (req, res) {
        db.Usuario.findByPk(req.params.id, {
          include: {
            model: db.Producto,
            as: 'productos'
          }
        })
        .then(usuario => {
          res.render('profile', { usuario });
        })
        .catch(error => {
          console.error(error);
        });
    },    
    createLogin: function (req,res) {
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme
        }
        req.session.user = userInfo;
    
        if (userInfo.recordarme != undefined) {
            res.cookie("user", userInfo, {maxAge: 1000 * 60 * 10})   
        }
    },
    logout: function (req, res) {
        return req.session.destroy();
    }
}

module.exports = userCont;